import React, { Component } from "react";
import SOCIALPROFILES from "../data/socialProfiles";

class SocialProfile extends Component {
    render(){
        const { title, link } = this.props.socialProfiles;
        return(
            <div>
                <a href={ link } target="_blank" rel="noreferrer">{ title }</a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render(){
        return(
            <div>
                {
                    SOCIALPROFILES.map(SOCIALPROFILE => {
                        return(
                            <div>
                                <SocialProfile key={ SOCIALPROFILE.id} SocialProfile={SOCIALPROFILE} />
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default SocialProfiles;