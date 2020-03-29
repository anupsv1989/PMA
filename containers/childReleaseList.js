import React, { Component } from "react";
import {
    Table, Popconfirm, Popover, Row, Col, Button, Tag,
    Input, Select, Slider, DatePicker, Form, Progress
} from "antd";
import { connect } from "react-redux";
import actions from "../redux/action";
import moment from 'moment';
import { EllipsisOutlined, EditOutlined } from '@ant-design/icons';
import { statusDisplay, progressDisplay, dateFormat } from "../commons/helpers";
const { onFetchItem } = actions;

class ChildReleaseList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            editStatus: "IN PROGRESS",
            editingKey: '',
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
                    render: (rec) => statusDisplay(rec)
                },
                {
                    title: 'Progess',
                    dataIndex: 'progress',
                    key: 'progress',
                    editable: true,
                    render: (rec) => progressDisplay(rec)
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
                                <Popconfirm title="Sure to cancel?" onConfirm={this.cancel} >
                                    <a>Cancel</a>
                                </Popconfirm>
                            </span>
                        ) : (
                                <EditOutlined disabled={this.state.editingKey !== ''} onClick={() => this.edit(record)} />
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
                inputNode = statusDisplay(this.state.editStatus)
                // inputNode = this.fetchStatusDisp(record.status);

                break;
            case "progress":
                inputNode = <Slider defaultValue={record.progress ? record.progress : 0} tooltipVisible name="progress" onChange={this.handleSlider} />
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

    fetchStatusDisp = (rec) => {


    }

    handleChange = (value) => {
        console.log("Vlaue", value)
        this.setState({
            editStatus: value
        })
    }

    handleSlider = (value) => {
        let releaseType = "IN PROGRESS"
        if (value == 0) {
            releaseType = "IN PROGRESS"
        } else if (value == 100) {
            releaseType = "RELEASED"
        } else {
            releaseType = "UNRELEASED"
        }
        console.log("On hcnafe of progress", value)
        this.setState({
            editProgress: value,
            editStatus: releaseType
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
        let temp = this.props.thisData;

        console.log("while save >>>>>>>>>>>>>>", this.state)

        temp.childRelease.map(item => {
            if (item.key == record.key) {
                item.key = record.key;
                item.status = editStatus;
                item.progress = editProgress;
                item.startDate = editstartDate;
                item.endDate = editEndDate;
                item.description = editDescription;
            }
        })

        let arr = JSON.parse(localStorage.getItem("parentReleaseData"));

        let index = arr.map(x => {
            return x.key;
        }).indexOf(temp.key);
        arr.splice(index, 1);
        let addData = temp;
        arr.unshift(addData);

        // debugger;
        console.log("Presnet Obj list form after ", arr)
        localStorage.setItem('parentReleaseData', JSON.stringify(arr));
        this.setState({
            editStatus: "",
            editProgress: "",
            editstartDate: "",
            editEndDate: "",
            editDescription: "",
        })
        this.props.onFetchItem();
    }




    componentWillReceiveProps(nextProps) {
        console.log("NExgt Props", nextProps);
        let { dataFromLS } = nextProps
        console.log("data from lcoal", dataFromLS);

        if (dataFromLS) {
            this.setState({
                listDataSrc: dataFromLS,
                editingKey: ""
            }, () => {
                console.log("After setting state :", this.state.listDataSrc)
            })
        }
    }

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    edit(record) {
        this.setState({
            editingKey: record.key,
            editStatus: record.status,
            editProgress: record.progress,
            editstartDate: record.startDate,
            editEndDate: record.endDate,
            editDescription: record.description
        });
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

const mapStateToProps = state => {
    return {
        dataFromLS: state.dataFromLS
    };
};

export default connect(
    mapStateToProps, { onFetchItem }
)(ChildReleaseList);
