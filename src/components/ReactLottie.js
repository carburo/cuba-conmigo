import React from "react";
import bodymovin from "bodymovin";

export default class Lottie extends React.Component {
    render() {
        var _props = this.props,
            width = _props.width,
            height = _props.height;

        var lottieStyles = {
            width: width ? width + 'px' : '100%',
            height: height ? height + 'px' : '100%',
            overflow: 'hidden',
            margin: '0 auto'
        };
        return <div ref="lavContainer" style={lottieStyles} />;
    }

    componentDidMount() {
        var _props$options = this.props.options,
            loop = _props$options.loop,
            autoplay = _props$options.autoplay,
            animationData = _props$options.animationData,
            rendererSettings = _props$options.rendererSettings,
            eventListeners = _props$options.eventListeners;
        var lavContainer = this.refs.lavContainer;

        this.options = {
            container: lavContainer,
            renderer: 'svg',
            loop: loop !== false,
            autoplay: autoplay !== false,
            animationData: animationData,
            rendererSettings: rendererSettings
        };

        this.anim = bodymovin.loadAnimation(this.options);
        this.registerEvents(eventListeners);
    }

    componentWillUpdate(nextProps, nextState) {
        /* Recreate the animation handle if the data is changed */
        if (this.options.animationData !== nextProps.options.animationData) {
            this.deRegisterEvents(this.props.eventListeners);
            this.destroy();
            this.options.animationData = nextProps.options.animationData;
            this.anim = bodymovin.loadAnimation(this.options);
            this.registerEvents(nextProps.eventListeners);
        }
    }

    componentDidUpdate() {
        this.props.isStopped ? this.stop() : this.play();
        this.pause();
        this.setSpeed();
        this.setDirection();
    }

    pause() {
        if (this.props.isPaused && !this.anim.isPaused) {
            this.anim.pause();
        } else if (!this.props.isPaused && this.anim.isPaused) {
            this.anim.pause();
        }
    }

    stop() {
        this.anim.stop();
    }

    play() {
        this.anim.play();
    }

    setSpeed() {
        this.anim.setSpeed(this.props.speed);
    }

    setDirection() {
        this.anim.setDirection(this.props.direction);
    }

    destroy() {
        this.anim.destroy();
    }

    registerEvents(eventListeners) {
        var _this2 = this;

        eventListeners && eventListeners.forEach(function (eventListener) {
            _this2.anim.addEventListener(eventListener.eventName, eventListener.callback);
        });
    }

    deRegisterEvents(eventListeners) {
        var _this3 = this;

        eventListeners && eventListeners.forEach(function (eventListener) {
            _this3.anim.removeEventListener(eventListener.eventName, eventListener.callback);
        });
    }
}


// Lottie.propTypes = {
//     eventListeners: propTypes.default.arrayOf(propTypes.default.object),
//     options: propTypes.default.object.isRequired,
//     height: propTypes.default.number,
//     width: propTypes.default.number,
//     isStopped: propTypes.default.bool,
//     isPaused: propTypes.default.bool,
//     speed: propTypes.default.number,
//     direction: propTypes.default.number
// };

Lottie.defaultProps = {
    eventListeners: [],
    isStopped: false,
    isPaused: false,
    speed: 1
};