import React, { Component } from "react";
import { Form, Input, Button, Row, Col, DatePicker, Select, Slider } from 'antd';

import { connect } from "react-redux";
import actions from "../redux/action";

const { onFetchItem } = actions;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const dateFormat = "DD-MM-YYYY";

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


        console.log("parent Object after adding", thisData);
        let arr = dbData;
        arr.map(item => {
            if (item.key == thisData.key) {
                let temp = {
                    key: "cr" + new Date().getTime(),
                    status: values.status,
                    startDate: values['startDate'].format(dateFormat),
                    endDate: values['endDate'].format(dateFormat),
                    description: values.description,
                    progress: values.progress
                }
                item.childRelease.push(temp)
            }
        });

        console.log("final Array in db", arr)
        localStorage.setItem("parentReleaseData", JSON.stringify(arr))
        // this.props.onFetchItem();
        this.props.closeModal();

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
                        <Col span={12}>
                            <Form.Item
                                label="status"
                                name="status"
                            >
                                <Select style={{ width: 120 }} name="status" >
                                    <Option value="IN PROGRESS">In Progress</Option>
                                    <Option value="UNRELEASED">Unreleased</Option>
                                    <Option value="RELEASED">Released</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Start Date" name="startDate">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="End Date" name="endDate">
                                <DatePicker />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Description"
                                name="description"
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Progress" name="progress"  >
                                <Slider defaultValue={30} tooltipVisible
                                    tooltipPlacement="bottom"
                                    name="progress" onChange={this.handleSlider} />
                            </Form.Item>

                        </Col>
                        <Col span={12}>
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

// const mapStateToProps = state => {
//     return {
//         dataFromLS: state.dataFromLS
//     };
// };

// export default connect(
//     mapStateToProps, { onFetchItem }
// )(AddChildRelease);
