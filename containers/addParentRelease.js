import React, { Component } from "react";
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';
import { dateFormat } from "../commons/helpers"
import { connect } from "react-redux";
import actions from "../redux/action";
import moment from 'moment';
const { onFetchItem } = actions;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


class AddParentRelease extends Component {

    constructor(props) {
        super(props);
        this.state = {
            localPRItems: [],

        }
    }

    componentDidMount() {
        let chkItem = JSON.parse(localStorage.getItem("parentReleaseData"));
        let getItems = chkItem == null ? [] : chkItem;
        this.setState({
            localPRItems: getItems
        })
        console.log("DID mount", getItems)
        console.log("DID mount localPRItems", this.state.localPRItems)
    }

    onFinish = (values) => {

        console.log("on ifinsh", values);
        console.log("Date", values['startDate']);




        let arr = this.state.localPRItems;
        let prObj = {
            key: new Date().getTime(),
            version: values.version,
            status: "",
            progress: "",
            startDate: values['startDate'] ? values['startDate'].format(dateFormat) : '',
            endDate: values['endDate'] ? values['endDate'].format(dateFormat) : '',
            description: values.description,
            childRelease: []
        }

        console.log("prObj", prObj);
        console.log("arr", arr)
        arr.push(prObj);
        localStorage.setItem("parentReleaseData", JSON.stringify(arr))
        this.props.onFetchItem();
    }



    onFinishFailed = () => {
        console.log("on ifinsh failed")
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
                    <div className="parent-release-sec">
                        <Row>
                            <Col span={5} className="parent-release-sec-col">
                                <Form.Item
                                    label="Version"
                                    name="version"
                                    rules={[{ required: true, message: 'Please input your version!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={4} className="parent-release-sec-col">
                                <Form.Item label="Start Date" name="startDate"  >
                                    <DatePicker defaultValue={moment(new Date, dateFormat)} />
                                </Form.Item>

                            </Col>
                            <Col span={4} className="parent-release-sec-col">
                                <Form.Item label="Release Date" name="endDate">
                                    <DatePicker defaultValue={moment(new Date, dateFormat)} />
                                </Form.Item>

                            </Col>

                            <Col span={5} className="parent-release-sec-col">
                                <Form.Item
                                    label="Description"
                                    name="description"
                                >
                                    <Input />
                                </Form.Item>

                            </Col>
                            <Col span={4} className="parent-release-sec-col">
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                            </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log("map event")
    return {
        dataFromLS: state.dataFromLS
    };
};

export default connect(
    mapStateToProps, { onFetchItem }
)(AddParentRelease);
