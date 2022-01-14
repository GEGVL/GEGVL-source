import React, { Component } from "react";
import sassVars from "./components.scss";
import Icon from "@mdi/react";
import { mdiLoading } from '@mdi/js';
import * as constants from "../constants";
import "./LoadingIndicator.scss";

/**
 * Loading animation and loading text component
 * @prop {string} text Text shown while loading
 */
export default class LoadingIndicator extends Component {
    render() {
        return (
            <div className="loading-container">
                <Icon
                    className="indicator"
                    path={mdiLoading}
                    color={sassVars.TEXT_SECONDARY_COLOR}
                    size={constants.LOADING_ICON_SIZE} />
                <div className="loading-text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}