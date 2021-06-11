// import React, { useEffec, useState } from 'react';
// import { useDispatch } from 'react-redux'
// import { SearchCountry } from '../Actions/SearchCountry'
// import { FaSearch } from 'react-icons/fa';


// const Search = () => {
//     const dispatch = useDispatch();
//     const [searchText, setSearchText] = useState<string>('');

//     useEffect(() => {
//       dispatch(setSearchCountry(searchText));
//     }, [searchText, dispatch]);
  
//     const handleOnChange = (e) => {
//       setSearchText(e.target.value);
//     };
  
//     return ( 
//             <div className={`search_box_group ${theme}`}>
//               <FaSearch size={22} />
//               <label htmlFor="search-country" className="sr-only">
//                 Search a country
//               </label>
//               <input
//                 type="text"
//                 name="search-country"
//                 id="search-country"
//                 onChange={handleOnChange}
//                 value={searchText}
//                 className="search_box__input"
//                 placeholder="Search for a country..."
//               />
//             </div>
//           )}

// export default Search;
