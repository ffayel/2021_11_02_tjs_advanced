import React from "react"

export const useGlobalEvent = (eventName, callback ) => {

    React.useEffect(
        /* initial */() => {
            window.addEventListener(eventName, callback)
            return /* cleanup */() => {
                window.removeEventListener(eventName, callback)
            }
        }
    , /* [] re trigger */)

}