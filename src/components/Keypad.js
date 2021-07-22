// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    typePassword = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.typePassword} type='password' placeholder='Enter password'/>
        )
    }
}

export default Keypad