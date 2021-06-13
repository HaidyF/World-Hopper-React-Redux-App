export const CountriesReducer = (state = {
    countries: [],
    loading: false
}, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: true };
        case 'FETCH_COUNTRIES':
            return { ...state, countries: action.payload, loading: false };
        default:
                return state
    }
}