import React from "react";
import bodymovin from "bodymovin/build/player/bodymovin_light.min";

export default class ReactBodymovin extends React.Component {
    componentDidMount() {
        var options = Object.assign({}, this.props.options);
        options.wrapper = this.wrapper;
        options.renderer = 'svg';
        this.animation = bodymovin.loadAnimation(options);
    }

    componentWillUnmount() {
        this.animation.destroy();
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        let _this2 = this;

        let storeWrapper = function storeWrapper(el) {
            _this2.wrapper = el;
        };

        return (
            <div className={`${this.props.className} react-bodymovin-container`} ref={storeWrapper}>
                {this.props.children}
            </div>    
        );
    }
}