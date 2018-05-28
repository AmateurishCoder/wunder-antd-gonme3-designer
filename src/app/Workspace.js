import React, {Component} from 'react';
import "./Workspace.css";
import IconEntry from "../common/IconEntry";
import Header from "../common/Header";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import User from "./applications/security/user/User";

class Workspace extends Component {

    render() {
        const {functions} = this.props;
        return (
            <div className="workspace-container">
                <div className="workspace-header-container">
                    <Header/>
                </div>
                <div className="workspace-body-container">
                    <div className="workspace-slider-back"/>
                    <div className="workspace-slider-container">
                        {(() => {
                            let icons = [];
                            for (let i = 0; i < functions.number; i++) {
                                icons.push(<IconEntry
                                    name={i}
                                    key={i}
                                    image="./test_p.png"
                                    showName={false}
                                />)
                            }
                            return icons;
                        })()}
                    </div>
                    <div className="workspace-content-container">
                        <User/>
                    </div>
                </div>
            </div>
        );
    }
}

Workspace.propTypes = {
    functions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        functions: state.functions
    }
}

export default connect(mapStateToProps)(Workspace);