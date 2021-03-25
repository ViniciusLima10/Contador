import React, {useContext} from 'react';
import { CountdownContext } from "../contexts/CountdownContext"

function Header () {

    const [countdown, setCountdown] = useContext(CountdownContext)

    return(

        <div className="header">
        <h3>Countdown</h3>
        <div>{countdown}</div>
    </div>
    )
}

export default Header