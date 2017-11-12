import {Link} from "react-router-dom";
import * as React from "react";

export default function FluidImg(props) {
    return (
        <Link to={props.route}>
            <img className="img-fluid mx-auto" src={props.src} alt={props.alt}/>
        </Link>
    );
}