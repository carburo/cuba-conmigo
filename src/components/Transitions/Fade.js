import {Transition} from "react-transition-group";
import React from "react";

const duration = 100;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in`,
    opacity: 0,
};

const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
};

export default function Fade({in: inProp, children: childrenProp}) {
    return (
        <Transition in={inProp} timeout={duration} appear={true}>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {childrenProp}
                </div>
            )}
        </Transition>
    );
};