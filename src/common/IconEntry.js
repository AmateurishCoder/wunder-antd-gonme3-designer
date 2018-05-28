import React, {Component} from 'react';
import {Col, Row, Tooltip} from "antd";
import "./IconEntry.css";
import {connect} from "react-redux";
import PropTypes from "prop-types";

// name 名称
// description 介绍
// image 图片
// click 点式事件
// showName 是否显示名称

class IconEntry extends Component {

    render() {
        const {click} = this.props;
        return (
            <Row
                className={this.props.showName ? "icon-entry-slider-entry-box" : "icon-entry-slider-entry-box-no-name"}>
                <Col span={24}>
                    <Tooltip placement="right" title={this.props.showName ? this.props.description : this.props.name}>
                        <img
                            src={this.props.image}
                            className="icon-entry-slider-entry-icon"
                            alt={this.props.name}
                            onClick={click}
                        />
                    </Tooltip>
                </Col>
                {(() => {
                    if (this.props.showName) {
                        return (
                            <Col span={24} className="icon-entry-slider-entry-name">
                                <span>{this.props.name}</span>
                            </Col>
                        )
                    }
                })()}
            </Row>
        );
    }
}

IconEntry.propTypes = {
    click: PropTypes.func.isRequired
};

const decreaseClick = {type: 'functions/decrease'};

function mapDispatchToProps(dispatch) {
    return {
        click: () => dispatch(decreaseClick)
    }
}

export default connect(() => {
    return {}
}, mapDispatchToProps)(IconEntry);