import { SEARCH_COUNTRY } from '../Actions/SearchCountry';

export const SearchCountryAction = () => {
  return {
    type: SEARCH_COUNTRY_ACTION,
    text: string
    }
}

export const searchCountry = (state = '', action: SearchCountryAction) => {
  switch (action.type) {
    case 'SEARCH_COUNTRY':
      return action.text
    default:
      return state
  }
};
