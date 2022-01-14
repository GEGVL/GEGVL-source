import Icon from "@mdi/react";
import React, { Component } from "react";
import "./components.scss";
import sassVars from "./sassVars.scss";
import "./DrawerMenuSection.scss";

/**
 * A section with some arbitrary content and title inside a drawer menu
 * @prop {string} title Title of this section
 * @prop {string} icon MDI icon to show alongside title
 * @prop {Component[]} children Content to render inside this menu section
 */
export default class DrawerMenuSection extends Component {
    render() {
        return (
            <div className="section-container">
                <hr />
                <div className="section-title">
                    <Icon
                        className="section-icon"
                        path={this.props.icon}
                        color={sassVars.TEXT_PRIMARY_COLOR}
                        size={1 * sassVars.MENU_SECTION_ICON_SIZE} />
                    <span className="section-title-text">
                        {this.props.title.toUpperCase()}
                    </span>
                </div>
                {this.props.children}
            </div>
        )
    }
}