import { Tag, Progress } from "antd";

export const dateFormat = "DD-MM-YYYY";

export const statusDisplay = (rec) => {

    switch (rec) {
        case "UNRELEASED":
            return (
                <div>
                    <Tag color="magenta">{rec}</Tag>
                </div>
            )
            break;
        case "RELEASED":
            return (
                <div>
                    <Tag color="green">{rec}</Tag>
                </div>
            )
        case "IN PROGRESS":
            return (
                <div>
                    <Tag color="blue">{rec}</Tag>
                </div>
            )
    }

}


export const progressDisplay = (rec) => {
    return (
        <Progress
            strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
            }}
            percent={rec}
        />
    )
}
