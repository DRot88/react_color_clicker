import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: [
            'Lavender',
            'Thistle',
            'Plum',
            'Violet',
            'Orchid',
            'Fuchsia',
            'Magenta',
            'MediumOrchid',
            'MediumPurple',
            'BlueViolet',
            'DarkViolet',
            'DarkOrchid',
            'DarkMagenta',
            'Purple',
            'RebeccaPurple',
            'Indigo',
            'MediumSlateBlue',
            'SlateBlue',
            'DarkSlateBlue'
        ]
    }
    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box colors={this.props.allColors} />
        )
        return <div className='BoxContainer'>{boxes}</div>;
    }
}

export default BoxContainer;