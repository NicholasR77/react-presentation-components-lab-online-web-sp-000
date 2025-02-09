// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    constructor() {
        super();
        this.state = {
            mood: 'happy'
        };
    }

    handleClick = () => {
        const checkedMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: checkedMood });
    }

    render() {
        return <div onClick={ this.handleClick }>{ this.state.mood }</div>
    }
}
