import React, {Component} from 'react';
import {Col, Row, Tooltip} from "antd";
import "./IconEntry.css";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class IconEntry extends Component {

    render() {
        const {onDecreaseClick} = this.props;
        return (
            <Row className="icon-entry-slider-entry-box">
                <Col span={24}>
                    <Tooltip placement="right" title={this.props.name}>
                        <img
                            src={this.props.image}
                            className="icon-entry-slider-entry-icon"
                            alt={this.props.name}
                            onClick={onDecreaseClick}
                        />
                    </Tooltip>
                </Col>
            </Row>
        );
    }
}

IconEntry.propTypes = {
    onDecreaseClick: PropTypes.func.isRequired
};

const decreaseClick = {type: 'functions/decrease'};

function mapDispatchToProps(dispatch) {
    return {
        onDecreaseClick: () => dispatch(decreaseClick)
    }
}

export default connect(() => {
    return {}
}, mapDispatchToProps)(IconEntry);