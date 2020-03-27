import React, { Component, useState, version } from "react";
import { Table, Tag, Form, Input, InputNumber, Popconfirm, Progress, DatePicker, Select, Slider } from 'antd';
import AddParentRelease from './addParentRelease';
import moment from 'moment';

const dateFormat = "DD-MM-YYYY";




export default class ReleaseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editingKey: '',
            editVersion: "",
            editStatus: "",
            editProgress: "",
            editstartDate: "",
            editEndDate: "",
            editDescription: "",
            columns: [
                {
                    title: 'Version No',
                    dataIndex: 'version',
                    key: 'version',
                    render: text => <a>{text}</a>,
                    editable: true,
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    editable: true,
                },
                {
                    title: 'Progress',
                    dataIndex: 'progress',
                    key: 'progress',
                    editable: true,
                    render: (rec) => (
                        <Progress
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={rec}
                        />
                    ),
                },
                {
                    title: 'Start Date',
                    dataIndex: 'startDate',
                    key: 'startDate',
                    editable: true,
                },
                {
                    title: 'Release Date',
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
                                <a disabled={this.state.editingKey !== ''} onClick={() => this.edit(record)}>
                                    Edit
                                </a>
                            );
                    }
                }
            ],
            listDataSrc: [],
            isEdit: false
        }
    }

    componentDidMount() {
        let chkItem = JSON.parse(localStorage.getItem("parentReleaseData"));
        let getItems = chkItem == null ? [] : chkItem;
        this.setState({
            listDataSrc: getItems
        })
    }

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
        console.log("started 2", record)
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

    handleChange = (value) => {
        console.log("Vlaue", value)
        this.setState({
            editStatus: value
        })
    }

    handleSlider = (value) => {
        console.log("slider Vlaue", value);
        this.setState({
            editProgress: value
        })
    }
    handleStartDate = (date, str) => {
        console.log("sliceer sd str", str)
        this.setState({
            editstartDate: str
        })
    }
    handleEndDate = (date, str) => {
        console.log("sliceer ed", str)
        this.setState({
            editEndDate: str
        })
    }
    handleDescription = (e) => {
        console.log("sliceer desc", e.target.value)
        this.setState({
            editDescription: e.target.value
        })
    }
    handleVersion = (e) => {
        console.log("sliceer vers", e.target.value)
        this.setState({
            editVersion: e.target.value
        })
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(record) {
        console.log("Form submit", record)
        let { editVersion, editstartDate, editEndDate, editDescription, editStatus, editProgress, listDataSrc } = this.state;

        // let arr = this.state.localPRItems;
        let prObj = {
            key: record.key,
            version: editVersion,
            status: editStatus,
            progress: editProgress,
            startDate: editstartDate,
            endDate: editEndDate,
            description: editDescription
        }

        console.log("Presnet Obj", prObj)
        console.log("Presnet Obj list form before", listDataSrc)


        listDataSrc.map(item => {
            if (item.key == record.key) {
                item.key = record.key;
                item.version = editVersion != "" ? editVersion : item.version;
                item.status = editStatus != "" ? editStatus : item.status;
                item.progress = editProgress != "" ? editProgress : item.progress;
                item.startDate = editstartDate != "" ? editstartDate : item.startDate;
                item.endDate = editEndDate != "" ? editEndDate : item.endDate;
                item.description = editDescription != "" ? editDescription : item.description;
            }
        })
        console.log("Presnet Obj list form after ", listDataSrc)
        localStorage.setItem('parentReleaseData', JSON.stringify(listDataSrc))

        // form.validateFields((error, row) => {
        //     if (error) {
        //         return;
        //     }
        //     console.log("Form submit", key)
        //     console.log("Form submit form", form)
        //     const newData = [...this.state.data];
        //     const index = newData.findIndex(item => key === item.key);
        //     if (index > -1) {
        //         const item = newData[index];
        //         newData.splice(index, 1, {
        //             ...item,
        //             ...row,
        //         });
        //         this.setState({ data: newData, editingKey: '' });
        //     } else {
        //         newData.push(row);
        //         this.setState({ data: newData, editingKey: '' });
        //     }
        // });
    }

    edit(record) {
        this.setState({ editingKey: record.key });
    }

    render() {
        let { listDataSrc } = this.state;

        const components = {
            body: {
                cell: this.EditableCell,
            },
        };

        const columns = this.state.columns.map(col => {
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
            <>
                <Form>
                    <Table
                        columns={columns}
                        dataSource={listDataSrc}
                        components={components}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: this.cancel,
                        }}
                    />
                </Form>


                <AddParentRelease />
            </>
        )
    }


}