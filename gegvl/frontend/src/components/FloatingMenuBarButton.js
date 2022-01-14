import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.scss";
import "./FloatingMenuBarButton.scss";
import Icon from "@mdi/react";
import * as Constants from "../constants.js";
import { Tooltip } from "bootstrap";
import variables from "./components.scss";

/**
 * A button to go inside a floating menu bar component
 * @prop {string} icon MDI icon
 * @prop {string} tooltip Tooltip shown on button hover
 * @prop {string} controls ID of Bootstrap offcanvas component this button controls
 * @prop {boolean} enabled Controls whether or not this button is clickable
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
            trigger: this.props.enabled ? "hover" : ""
        });
    }

    render() {
        return (
            <button
                className="button circle drop-shadow"
                ref={this.tooltip}
                data-bs-toggle="offcanvas"
                href={"#" + this.props.controls}
                disabled={!this.props.enabled}
                aria-controls={this.props.enabled ? this.props.controls : "Disabled"}
                aria-label={this.props.enabled ? this.props.tooltip : ""}>
                <Icon
                    path={this.props.icon}
                    color={this.props.enabled ? variables.TEXT_PRIMARY_COLOR : variables.TEXT_SECONDARY_COLOR}
                    size={Constants.FLOATING_MENU_BAR_BUTTON_ICON_SIZE} />
            </button>
        );
    }

}

FloatingMenuBarButton.defaultProps = {
    icon: "",
    tooltip: "",
    controls: "",
    enabled: true,
}