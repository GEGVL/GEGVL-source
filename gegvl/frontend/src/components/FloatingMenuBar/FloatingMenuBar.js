import React, { Component } from "react";
import "./FloatingMenuBar.scss";
import "../components.scss"

/**
 * A button to go inside a floating menu bar component
 * @prop {FloatingMenuBarButton[]} children List of buttons to show inside this menu
 */
export default class FloatingMenuBar extends Component {
    render() {
        return (
            <div className="menu-bar glass pill drop-shadow">
                {this.props.children}
            </div>
        );
    }
}