import React from "react";

const DescriptionWithLink = (props) => {
    return (
        <div>
            <p>{props.desc}</p>
            <a href={props.link}>{props.desc_link_name}</a>
        </div>
    )
}

export default DescriptionWithLink;