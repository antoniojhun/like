import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';
import './Mbti.css';


class Mbti extends Component {
    state = {
        dreamer_percent: 1,
        dreamer_color: '#3FC7FA',
        dynamic_percent: 1,
        dynamic_color: "#45ab23",
        light_percent: 1,
        light_color: "#FFFFAA"
    }

    componentDidMount() {
        setTimeout(this.changeState, 200)
    }

    changeState = () => {
        const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
        const dreamerVal = 70;
        const dynamicVal = 45;
        const lightVal = 85;
        this.setState({
            dreamer_percent: dreamerVal,
            dreamer_color: colorMap[parseInt(Math.random() * 3, 10)],
            dynamic_percent: dynamicVal,
            dynamic_color: colorMap[parseInt(Math.random() * 3, 10)],
            light_percent: lightVal,
            light_color: colorMap[parseInt(Math.random() * 3, 10)],
        });
    }
    render() {
        const { dreamer_percent, dreamer_color, dynamic_percent, dynamic_color, light_percent, light_color } = this.state;
        const containerStyle = {
            width: '30vw',
        };
        const circleContainerStyle = {
            width:'100%',
            height: '100%',
            display: 'inline-block',
        };
        return (
            <div className="MbtiContainer">
                <div className="Dreamer">
                    <h3>Dreamer Percentage: {dreamer_percent}%</h3>
                    <div style={circleContainerStyle}>
                        <Circle percent={dreamer_percent} strokeWidth="6" strokeLinecap="round" strokeColor={dreamer_color} />
                    </div>
                </div>
                <div className="Dynamic">
                    <h3>Dreamer Percentage: {dynamic_percent}%</h3>
                    <div style={circleContainerStyle}>
                        <Circle percent={dynamic_percent} strokeWidth="6" strokeLinecap="round" strokeColor={dynamic_color} />
                    </div>
                </div>
                <div className="Light">
                    <h3>Light Percentage: {light_percent}%</h3>
                    <div style={circleContainerStyle}>
                        <Circle percent={light_percent} strokeWidth="6" strokeLinecap="round" strokeColor={light_color} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Mbti
