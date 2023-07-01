import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Chakra imports
import { Flex, Spinner, Text } from "@chakra-ui/react";

import CountryCardDetail from "./CountryCardDetail.jsx";

const CountryDetail = () => {
    let { countryname } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryname}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log("Error:", err.message));
    }, [countryname]);
    
    return (
        <Flex 
            w="100%"
            justify="center"
            align="center"
            wrap="wrap"
        >
            {data?.length === 0 ? (
                <Flex
                my='200px'
                direction="column"
                justify="center"
                align="center"
                wrap="wrap"
                >
                    <Spinner thickness='5px'
                        speed='0.65s'
                        emptyColor='blue.200'
                        color='tomato'
                        size='xl'
                    />
                    <Text fontSize='4xl' as='b'>Loading</Text>
                </Flex>
            ) : (
                <Flex 
                w="100%"
                justify="center"
                align="center"
                wrap="wrap"
                >
                    {data?.map((country) => (
                    <Flex className="countriesDisplay"
                        justify="center"
                        align="center"
                        wrap="wrap"
                    >
                        <CountryCardDetail country={country} key={country}/>
                    </Flex>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

export default CountryDetail;