import React, { Component } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import "./LoadingView.scss";

/**
 * Loading screen show while retrieving data from API
 */
export default class LoadingView extends Component {
    render() {
        return (
            <div class="loading-background">
                <LoadingIndicator text="Loading GEGVL..." />
            </div>
        );
    }
}