export const fetchCountries = () => {
    return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch('https://restcountries.eu/rest/v2/all')
    .then(resp => resp.json())
    .then(countries => dispatch({ 
        type: 'FETCH_COUNTRIES', 
        payload: countries }))
    }
}

export const addInput = (input) => {
    console.log(JSON.stringify(input))
    return (dispatch) => {
        dispatch({ type: 'ADDING_INPUT'})
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)  
    }
    fetch('http://localhost:4000/inputs',configObj)
    .then(resp => resp.json())
    .then(formEntry => { 
            if(formEntry.status !== 400) {
            return dispatch({
            type: 'INPUT_ADDED',
            payload: formEntry
                })
            }
         })
    }
}