import React, { Component } from "react";
import Icon from "@mdi/react";
import sassVars from "../sassVars.scss";
import "./SocialButton.scss";
import { Tooltip } from "bootstrap";

/**
 * Icon button representing a social media link
 * @prop {string} name Name of social media this button links to 
 * @prop {string} url URL to link to on click
 * @prop {string} icon MDI icon to display
 */
export default class SocialButton extends Component {
    constructor(props) {
        super(props);
        this.tooltip = React.createRef();
    }

    componentDidMount() {
        new Tooltip(this.tooltip.current, {
            title: this.props.name,
            placement: "top",
            trigger: "hover"
        });
    }

    render() {
        return (
            <a
                href={this.props.url}
                target="_blank"
                rel="noreferrer noopener"
                className="social-icon"
                ref={this.tooltip}
                aria-label={this.props.name}>
                <Icon
                    path={this.props.icon}
                    color={sassVars.TEXT_SECONDARY_COLOR}
                    size={Number(sassVars.SOCIAL_ICON_SIZE)} />
            </a>
        );
    }
}