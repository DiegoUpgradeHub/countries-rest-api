import React from "react";

import CountryList from "./CountryList.jsx";

const Countries = () => {

    return (
        <div className="countriesPage">
            <body>
                <div className="CountriesList">
                    <CountryList />
                </div>
            </body>
        </div>
    );
};

export default Countries;