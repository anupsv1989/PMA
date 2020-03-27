import React, { Component } from "react";
import { Table, Tag } from 'antd';
import AddParentRelease from './addParentRelease';


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
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                <a>Delete</a>
            </span>
        ),
    },
];

const data = [
    {
        version: 'John Brown',
        status: 32,
        progress: 'New York No. 1 Lake Park',
        startDate: 'New York No. 1 Lake Park',
        endDate: 'New York No. 1 Lake Park',
        description: 'nice desfcipriton',
    },
    {
        version: 'John Brown',
        status: 32,
        progress: 'New York No. 1 Lake Park',
        startDate: 'New York No. 1 Lake Park',
        endDate: 'New York No. 1 Lake Park',
        description: 'nice desfcipriton',
    },
    {
        version: 'John Brown',
        status: 32,
        progress: 'New York No. 1 Lake Park',
        startDate: 'New York No. 1 Lake Park',
        endDate: 'New York No. 1 Lake Park',
        description: 'nice desfcipriton',
    },
    {
        version: 'John Brown',
        status: 32,
        progress: 'New York No. 1 Lake Park',
        startDate: 'New York No. 1 Lake Park',
        endDate: 'New York No. 1 Lake Park',
        description: 'nice desfcipriton',
    },

];


export default class ReleaseList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Table columns={columns} dataSource={data} />
                <AddParentRelease />
            </>
        )
    }


}