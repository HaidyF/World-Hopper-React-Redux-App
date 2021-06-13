import React from 'react';
import {useParams} from "react-router-dom";
import {CountriesContainer} from './CountriesContainer'

function Country() {
    const { name } = useParams();
    // state = {
    //     name: '',
    //     flag: '',
    //     capital: '',
    //     region: '',
    //     population: '',
    //     timezones: '',
    //     language: ''
    // }
        return (
            <div>
                {name}
            </div>
        );
}

export default Country;
