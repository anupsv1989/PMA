import React, { Component } from "react";
import { Form, Input, Button, Row, Col, DatePicker, Select, Slider } from 'antd';
import { dateFormat } from "../commons/helpers";
import moment from 'moment';

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default class AddChildRelease extends Component {

    constructor(props) {
        super(props);
        this.state = {
            localPRItems: [],

        }
    }

    componentDidMount() {

        console.log("this props >>>>>>>>>>>>>>>>.", this.props)

        let chkItem = JSON.parse(localStorage.getItem("parentReleaseData"));
        let getItems = chkItem == null ? [] : chkItem;
        this.setState({
            localPRItems: getItems
        })
        console.log("DID mount", getItems)
        console.log("DID mount localPRItems", this.state.localPRItems)
    }

    onFinish = (values) => {

        console.log("this props >>>>>>>>>>>>>>>>.", this.props)
        let { thisData, dbData } = this.props;
        console.log("on ifinsh", values);

        let defDate = new Date();
        console.log("parent Object after adding defDate", defDate);

        console.log("parent Object after adding defDate", defDate);
        let arr = dbData;
        arr.map(item => {
            if (item.key == thisData.key) {
                let temp = {
                    key: "cr" + new Date().getTime(),
                    status: values.status,
                    startDate: values['startDate'] ? values['startDate'].format(dateFormat) : moment(defDate).format(dateFormat),
                    endDate: values['endDate'] ? values['endDate'].format(dateFormat) : moment(defDate).format(dateFormat),
                    description: values.description,
                    progress: values.progress
                }
                item.childRelease.push(temp)
            }
        });

        console.log("final Array in db", arr)
        localStorage.setItem("parentReleaseData", JSON.stringify(arr))
        this.props.refreshCallBack();
        this.props.closeModal();

    }



    render() {
        return (
            <div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Row>
                        <Col span={8} className="left-addCol">
                            <Form.Item
                                label="Status"
                                name="status"
                            >
                                <Select name="status" >
                                    <Option value="IN PROGRESS">In Progress</Option>
                                    <Option value="UNRELEASED">Unreleased</Option>
                                    <Option value="RELEASED">Released</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Start Date" name="startDate">
                                <DatePicker defaultValue={moment(new Date, dateFormat)} />
                            </Form.Item>
                        </Col>
                        <Col span={6} className="enddate-align">
                            <Form.Item label="End Date" name="endDate">
                                <DatePicker defaultValue={moment(new Date, dateFormat)} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} className="left-addCol">
                            <Form.Item label="Progress" name="progress"  >
                                <Slider
                                    defaultValue={0}
                                    tooltipPlacement="bottom"
                                    name="progress"
                                    onChange={this.handleSlider} />
                            </Form.Item>

                        </Col>

                        <Col span={14} >
                            <Form.Item
                                label="Description"
                                name="description"
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className="btn-add-child">
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                            </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </div >
        )
    }
}


