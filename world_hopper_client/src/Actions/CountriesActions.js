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
