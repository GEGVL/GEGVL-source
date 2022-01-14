import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DrawerMenuHeader from "./DrawerMenuHeader";
import "./components.scss";

/**
 * A generic pullout drawer menu from the left side
 * @prop {DrawerMenuSection[]} children List of drawer menu sections to render
 * @prop {string} id ID of this drawer menu
 */
export default class DrawerMenu extends Component {
    render() {
        return (
            <div className="offcanvas offcanvas-start glass" data-bs-scroll="true" data-bs-backdrop="false" id={this.props.id}>
                <DrawerMenuHeader id={this.props.id} />
                <div className="offcanvas-body">
                </div>
            </div>
        );
    }
}