import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DrawerMenuHeader from "./DrawerMenuHeader";
import "../components.scss";
import "./DrawerMenu.scss";
import DrawerMenuFooter from "./DrawerMenuFooter";

/**
 * A generic pullout drawer menu from the left side
 * @prop {DrawerMenuSection[]} children List of drawer menu sections to render
 * @prop {string} id ID of this drawer menu
 * @prop {Component[]} children Components to display inside menu
 */
export default class DrawerMenu extends Component {
    render() {
        return (
            <div className="offcanvas offcanvas-start glass drop-shadow" data-bs-scroll="true" data-bs-backdrop="false" id={this.props.id}>
                <DrawerMenuHeader id={this.props.id} />
                <div className="offcanvas-body">
                    {this.props.children}
                </div>
                <DrawerMenuFooter />
            </div>
        );
    }
}