import React from 'react';
import { useContext } from 'react/cjs/react.development';
import {CountdownContext} from '../contexts/CountdownContext'

function Countdown (props) {

    const [countdown, setCountdown] = useContext(CountdownContext)

    return (
        <div>
            <div>{countdown}</div>
            <button onClick={()=> {setCountdown(anterior=>anterior - 1)}}>-</button>
            <button onClick={()=> {setCountdown(anterior=>anterior + 1)}}>+</button>

        </div>
    )
}

export default Countdown
