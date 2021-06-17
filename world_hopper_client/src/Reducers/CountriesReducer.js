export const CountriesReducer = (state = {
    countries: [],
    inputs: [],
    loading: false
}, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: true };
        case 'FETCH_COUNTRIES':
            return { ...state, countries: action.payload, loading: false };
        case 'ADDING_INPUT':
            return {...state, loading: true}
        case 'INPUT_ADDED':
            console.log(action.payload)

            return {...state, inputs: [...state.inputs, action.payload], loading: false}
        default:
                return state
    }
}