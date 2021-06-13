import React from 'react';
import {useParams} from "react-router-dom";
import {CountriesContainer} from './CountriesContainer'

function Country() {
    const { name } = useParams();
    
        return (
            <div>
                {name}
                
            </div>
        );
}

export default Country;
