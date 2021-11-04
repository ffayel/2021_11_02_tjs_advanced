import React from "react"

export const useStateObject = (initialStateObject = {}) => {

    const [stateObject, setStateObject] = React.useState(initialStateObject)

    const setKey = val => {
        // console.log('Heavy Work ' + Math.random())

        const setter = e => {
            setStateObject({ ...stateObject, ...{ [val]: e.target.value } })
        }
        return setter;
    }

    return [stateObject, setKey, setStateObject]

}