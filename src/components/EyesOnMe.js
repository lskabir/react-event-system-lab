// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onBlur={this.blur} onFocus={this.focus}>Click me!</button>
        )
    }
}

export default EyesOnMe