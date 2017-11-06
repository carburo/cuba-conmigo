import React from "react";

export default function InfoCard(props) {
    return (
        <div className="info-card">
            <div style={iconStyle} className="text-primary mb-2 icon-wrapper">
                {props.icon}
            </div>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}

const iconStyle = {
    fontSize: "2.5rem",
};
