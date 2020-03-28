import React, { Component } from "react";
import {
    Table, Popconfirm, Popover, Row, Col, Button, Input, Select, Slider, DatePicker, Form
} from "antd";

import moment from 'moment';
const dateFormat = "DD-MM-YYYY";


export default class ChildReleaseList extends Component {


    constructor(props) {
        super(props);
        this.state = {

            editingKey: '',
            childColumns: [

                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    editable: true,
                },
                {
                    title: 'Progess',
                    dataIndex: 'progress',
                    key: 'progress',
                    editable: true,
                },
                {
                    title: 'Start Date',
                    dataIndex: 'startDate',
                    key: 'startDate',
                    editable: true,
                },
                {
                    title: 'End Date',
                    dataIndex: 'endDate',
                    key: 'endDate',
                    editable: true,
                },
                {
                    title: 'Description',
                    dataIndex: 'description',
                    key: 'description',
                    editable: true,
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => {
                        const editable = this.isEditing(record);
                        const Content = (
                            <div>
                                <Row>
                                    <Col span={8}><a disabled={this.state.editingKey !== ''} onClick={() => this.edit(record)}>Edit</a></Col>
                                    <Col span={8}><a disabled={this.state.editingKey !== ''} onClick={() => this.addChildItem(record)}>Add</a></Col>
                                    <Col span={8}><a disabled={this.state.editingKey !== ''} onClick={() => this.deleteItem(record)}>Delete</a></Col>
                                </Row>
                            </div>
                        );
                        return editable ? (
                            <span>
                                <a
                                    href="javascript:;"
                                    onClick={() => this.save(record)}
                                    style={{
                                        marginRight: 8,
                                    }}
                                >
                                    Save
                            </a>
                                <Popconfirm title="Sure to cancel?" onConfirm={this.cancel}>
                                    <a>Cancel</a>
                                </Popconfirm>
                            </span>
                        ) : (
                                <Popover content={Content} title="Title" trigger="hover">
                                    <Button>Hover me</Button>
                                </Popover>
                            );
                    }
                }
            ],
        }
    }


    isEditing = record => record.key === this.state.editingKey;

    EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        // console.log("started 1", children)
        // console.log("started 2", record)
        // console.log("started 4", dataIndex)
        // console.log("started 5", title)
        let inputNode;


        switch (dataIndex) {
            case "version":
                inputNode = <Input defaultValue={record.version} name="version" onChange={this.handleVersion} />
                break;
            case "startDate":
                inputNode = <DatePicker name="startDate" defaultValue={moment(record.startDate, dateFormat)} onChange={this.handleStartDate} />
                break;
            case "endDate":
                inputNode = <DatePicker name="endDate" defaultValue={moment(record.endDate, dateFormat)} onChange={this.handleEndDate} />
                break;
            case "description":
                inputNode = <Input defaultValue={record.description} onChange={this.handleDescription} />
                break;
            case "status":
                inputNode =
                    <Select style={{ width: 120 }} name="status" onChange={this.handleChange}>
                        <Option value="IN PROGRESS">In Progress</Option>
                        <Option value="UNRELEASED">Unreleased</Option>
                        <Option value="RELEASED">Released</Option>
                    </Select>
                // onChange = { handleChange }
                break;
            case "progress":
                inputNode = <Slider defaultValue={30} tooltipVisible name="progress" onChange={this.handleSlider} />
                break;
            default:
            // code block
        }

        // const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ?
                    (
                        <Form.Item
                            name={dataIndex}
                            style={{ margin: 0 }}
                            rules={[
                                {
                                    required: true,
                                    message: `Please Input ${title}!`,
                                },
                            ]}
                        >
                            {inputNode}
                        </Form.Item>

                    )

                    : (
                        children
                    )}
            </td>
        );
        // }
    };


    cancel = () => {
        this.setState({ editingKey: '' });
    };

    edit(record) {
        this.setState({ editingKey: record.key });
    }

    render() {

        const components = {
            body: {
                cell: this.EditableCell,
            },
        };

        const columns = this.state.childColumns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (

            <Table
                columns={columns}
                dataSource={this.props.record.childRelease}
                pagination={false}
                components={components}
            />
        )
    }

}
