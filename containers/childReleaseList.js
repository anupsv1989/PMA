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
            editStatus: "",
            editProgress: "",
            editstartDate: "",
            editEndDate: "",
            editDescription: "",
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
                    <Select style={{ width: 120 }} name="status" onChange={this.handleChange} defaultValue={record.status}>
                        <Option value="IN PROGRESS">In Progress</Option>
                        <Option value="UNRELEASED">Unreleased</Option>
                        <Option value="RELEASED">Released</Option>
                    </Select>
                // onChange = { handleChange }
                break;
            case "progress":
                inputNode = <Slider defaultValue={30} tooltipVisible name="progress" onChange={this.handleSlider} />
                break;
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

    save(record) {
        console.log("Form submit", record)
        console.log("Form submit this data", this.props.thisData)
        let { editstartDate, editEndDate, editDescription, editStatus, editProgress } = this.state;

        console.log("editstartDate ", editstartDate)
        console.log("editEndDate ", editEndDate)
        console.log("editDescription ", editDescription)
        console.log("editStatus ", editStatus)
        console.log("editProgress ", editProgress)
        console.log("Presnet Obj list form before")


        let temp = this.props.thisData;
        temp.childRelease.map(item => {
            if (item.key == record.key) {
                item.key = record.key;
                item.status = editStatus != "" ? editStatus : item.status;
                item.progress = editProgress != "" ? editProgress : item.progress;
                item.startDate = editstartDate != "" ? editstartDate : item.startDate;
                item.endDate = editEndDate != "" ? editEndDate : item.endDate;
                item.description = editDescription != "" ? editDescription : item.description;
            }
        })

        let arr = JSON.parse(localStorage.getItem("parentReleaseData"));

        let index = temp.childRelease.map(x => {
            return x.key;
        }).indexOf(record.key);
        arr.splice(index, 1);
        let addData = temp;

        arr.unshift(addData);


        console.log("Presnet Obj list form after ", arr)
        localStorage.setItem('parentReleaseData', JSON.stringify(arr))
    }



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
                dataSource={this.props.thisData.childRelease}
                pagination={false}
                components={components}
            />
        )
    }

}
