import React, { Component } from "react";
import SocialButton from "./SocialButton";
import { mdiWeb, mdiInstagram, mdiTwitter, mdiReddit, mdiFacebook, mdiYoutube } from '@mdi/js';
import "./DrawerMenuFooter.scss";

/**
 * Footer for every drawer menu
 */
export default class DrawerMenuFooter extends Component {
    render() {
        return (
            <>
                <hr />
                <div className="social-row">
                    <SocialButton name="GSS Website" url="https://utdgss2016.wixsite.com/utdgss" icon={mdiWeb} />
                    <SocialButton name="GSS Instagram" url="https://www.instagram.com/utd_geosciencestudio/" icon={mdiInstagram} />
                    <SocialButton name="GSS Twitter" url="https://twitter.com/utdgss2016" icon={mdiTwitter} />
                    <SocialButton name="GSS Reddit Account" url="https://www.reddit.com/user/UTD_GSS" icon={mdiReddit} />
                    <SocialButton name="GSS Facebook Page" url="https://www.facebook.com/groups/utd.gss/" icon={mdiFacebook} />
                    <SocialButton name="GSS YouTube Channel" url="https://www.youtube.com/c/UTDGEOSCIENCESTUDIO2021" icon={mdiYoutube} />
                </div>
            </>
        );
    }
}