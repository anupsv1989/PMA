import React, { Component } from "react";
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const dateFormat = "DD-MM-YYYY";

export default class AddParentRelease extends Component {

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
        console.log("Date", values['startDate'].format('YYYY-MM-DD'));

        let arr = this.state.localPRItems;
        let prObj = {
            key: new Date().getTime(),
            version: values.version,
            status: "",
            progress: "",
            startDate: values['startDate'].format(dateFormat),
            endDate: values['endDate'].format(dateFormat),
            description: values.description,
            childRelease: []
        }

        console.log("prObj", prObj);
        console.log("arr", arr)
        arr.push(prObj);
        localStorage.setItem("parentReleaseData", JSON.stringify(arr))
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
                    <Row>
                        <Col span={4}>
                            <Form.Item
                                label="version"
                                name="version"
                                rules={[{ required: true, message: 'Please input your version!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="start Date" name="startDate"  >
                                <DatePicker />
                            </Form.Item>

                        </Col>
                        <Col span={4}>
                            <Form.Item label="end Date" name="endDate">
                                <DatePicker />
                            </Form.Item>

                        </Col>

                        <Col span={4}>
                            <Form.Item
                                label="Description"
                                name="description"
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                        <Col span={4}>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                            </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}