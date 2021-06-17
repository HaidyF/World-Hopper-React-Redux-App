import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <img alt="footerImage" src= "http://theworldhopper.com/wp-content/uploads/2017/03/Logo-horizontal-72-color-outlined.png"></img>
                {/* <img  alt="footerImage" src= "data:image/png;base64,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"></img> */}
            </div>
        );
    }
}

export default Footer;
