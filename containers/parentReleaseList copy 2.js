import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

import AddParentRelease from './addParentRelease';

let chkItem = JSON.parse(localStorage.getItem("parentReleaseData"));
let getItems = chkItem == null ? [] : chkItem;

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};

const ReleaseList = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(getItems);
    const [editingKey, setEditingKey] = useState('');


    const isEditing = record => record.key === editingKey;

    const edit = record => {
        form.setFieldsValue({ ...record });
        // alert(record.key);
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };



    const save = async key => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Version No',
            dataIndex: 'version',
            key: 'version',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Progress',
            dataIndex: 'progress',
            key: 'progress',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'Release Date',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            href="javascript:;"
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
            </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                        <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                            Edit
                        </a>
                    );
            },
        },
    ];
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
            <AddParentRelease />
        </>
    );
};

// ReactDOM.render(<ReleaseList />, document.getElementById('container'));
// const ReleaseList = Form.create()(EditableTable);
// ReactDOM.render(<WrappedNormal />, mountNode);

export default ReleaseList;
