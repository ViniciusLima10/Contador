import React, {useState, createContext} from 'react';

export const CountdownContext = createContext()

export function CountdownProvider(props) {
    const [countdown, setCountdown] = useState(0)

    return(
        <CountdownContext.Provider value={[countdown, setCountdown]}>
            {props.children}
        </CountdownContext.Provider>
    )

}