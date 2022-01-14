import React, { Component } from "react";
import FloatingMenuBarButton from "./FloatingMenuBarButton";
import { mdiMapSearchOutline, mdiDatabaseSearchOutline, mdiHelpCircleOutline } from '@mdi/js';
import "./FloatingMenuBar.scss";
import "./components.scss"

/**
 * A button to go inside a floating menu bar component
 */
export default class FloatingMenuBar extends Component {
    render() {
        return (
            <div className="menu-bar glass pill drop-shadow">
                <FloatingMenuBarButton tooltip="Map settings" icon={mdiMapSearchOutline} />
                <FloatingMenuBarButton tooltip="Knowledge base" icon={mdiDatabaseSearchOutline} />
                <FloatingMenuBarButton tooltip="Help" icon={mdiHelpCircleOutline} />
            </div>
        );
    }
}