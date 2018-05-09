import React, {Component} from 'react';
import {Col, Popover, Row} from "antd";
import "./Header.css";
import Title from "../app/applications/system/function/Title";
import Content from "../app/applications/system/function/Content";

class Header extends Component {

    logout = () => {
        alert("logout");
    };

    render() {
        return (
            <Row>
                {/*左侧工具条*/}
                <Col span={8}>
                    <Row type="flex" justify="start">
                        <Col span={8} className="header-sys-left-tool-container">
                            <Popover placement="bottomLeft" title={<Title/>} content={<Content/>} trigger="click">
                                <span className="header-sys-left-tool">功能</span>
                            </Popover>
                        </Col>
                    </Row>
                </Col>
                {/*中间系统名称*/}
                <Col span={8}>
                    <Row type="flex" justify="center">
                        <Col span={24} className="header-sys-name">
                            <span>
                                {window.cfg.name}
                            </span>
                        </Col>
                    </Row>
                </Col>
                {/*右侧工具条*/}
                <Col span={8}>
                    <Row type="flex" justify="end">
                        <Col span={24} className="header-sys-right-tool-container">
                            <span className="header-sys-right-tool">{"欢迎,刘璇"}</span>
                            <span className="header-sys-right-tool" onClick={this.logout}>登出</span>
                        </Col>
                    </Row>
                </Col>

            </Row>
        );
    }
}

export default Header;