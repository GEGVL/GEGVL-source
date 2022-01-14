import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.scss";
import "./FloatingMenuBarButton.scss";
import Icon from "@mdi/react";
import * as constants from "../constants.js";
import { Tooltip } from "bootstrap";
import sassVars from "./components.scss";

/**
 * A button to go inside a floating menu bar component
 * @prop {string} icon MDI icon
 * @prop {string} tooltip Tooltip shown on button hover
 * @prop {function} callback Function run when button clicked
 */
export default class FloatingMenuBarButton extends Component {
    constructor(props) {
        super(props);
        this.tooltip = React.createRef();
    }

    componentDidMount() {
        new Tooltip(this.tooltip.current, {
            title: this.props.tooltip,
            placement: "right",
            trigger: "hover"
        });
    }

    render() {
        return (
            <button
                className="button circle drop-shadow"
                ref={this.tooltip}
                onClick={this.props.callback}>
                <Icon
                    path={this.props.icon}
                    color={sassVars.TEXT_PRIMARY_COLOR}
                    size={constants.FLOATING_MENU_BAR_BUTTON_ICON_SIZE} />
            </button>
        );
    }

}