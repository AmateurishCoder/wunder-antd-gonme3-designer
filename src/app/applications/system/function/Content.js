import React, {Component} from 'react';
import "./Content.css";
import {Tabs} from "antd";
import SecurityPanel from "./panels/SecurityPanel";
const TabPane = Tabs.TabPane;

class Content extends Component {
    render() {
        return (
            <Tabs size="small" className="system-function-content-container">
                <TabPane tab="应用" key="1" className="system-function-content-tab">
                    Content of tab 1
                </TabPane>
                <TabPane tab="字典" key="2" className="system-function-content-tab">
                    Content of tab 2
                </TabPane>
                <TabPane tab="安全" key="3" className="system-function-content-tab">
                    <SecurityPanel/>
                </TabPane>
            </Tabs>
        );
    }
}

export default Content;