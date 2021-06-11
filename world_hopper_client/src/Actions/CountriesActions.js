export const fetchCountries = () => {
    return (dispatch) => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(resp => resp.json())
    .then(countries => dispatch({ type: 'FETCH_COUNTRIES', payload: countries }))
    }
}