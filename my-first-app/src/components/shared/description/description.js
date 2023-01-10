import React from "react";

const DescriptionWithLink = (props) => {

    if(!props.desc) {
        return null;
    }

    if(props.link) {
        return (
            <div>
                <p>{props.desc}</p>
                <a href={props.link}>{props.desc_link_name}</a>
            </div>
        )
    } else {
        return (
            <div>
                <p>{props.desc}</p>
            </div>
        )
    }

}

export default DescriptionWithLink;