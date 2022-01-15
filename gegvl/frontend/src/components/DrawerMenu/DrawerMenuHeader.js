import React, { Component } from "react";
import "./DrawerMenuHeader.scss";
import Icon from "@mdi/react";
import sassVars from "../sassVars.scss";
import { mdiClose } from '@mdi/js';

/**
 * Header for every drawer menu
 * @prop {string} id ID of the drawer menu this header is in
 */
export default class DrawerMenuHeader extends Component {
    render() {
        return (
            <div className="header-container">
                <img className="logo" src="/static/images/logo.webp" alt="GSS Logo" />
                <h1 className="gegvl-text">GEGVL</h1>
                <button
                    className="drawer-close-button"
                    data-bs-toggle="offcanvas"
                    href={"#" + this.props.id}
                    aria-label="Close">
                    <Icon
                        path={mdiClose}
                        color={sassVars.TEXT_PRIMARY_COLOR}
                        size={Number(sassVars.CLOSE_BUTTON_ICON_SIZE)} />
                </button>
            </div>

        );
    }
}