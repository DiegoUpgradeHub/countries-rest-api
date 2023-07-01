import React from "react";

//Chakra imports
import { Image, Grid, GridItem } from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon } from '@chakra-ui/icons'
import { BsCurrencyExchange } from 'react-icons/bs';

const CountryCardDetail = ({ country }) => {

    return (
        <>
            <Grid
                h='250px'
                templateRows='repeat(5)'
                templateColumns='repeat(8)'
                gap={1}
            >
                <GridItem colSpan={10} bg='tomato'>
                    <Image
                        src={country?.flags?.svg}
                        alt={country?.name?.common}
                        objectFit="contain"
                    />
                </GridItem>
                <GridItem colSpan={2}>Name</GridItem>
                <GridItem colSpan={8} as='b'>{country?.name?.common}</GridItem>
                <GridItem colSpan={10} h='1px' w='full' bg='grey'/>
                <GridItem colSpan={2}>Region</GridItem>
                <GridItem colSpan={8} as='b'>{country?.region} | {country?.subregion}</GridItem>
                <GridItem colSpan={10} h='1px' w='full' bg='grey'/>
                <GridItem colSpan={2}>Capital</GridItem>
                <GridItem colSpan={8} as='b'>{country?.capital}</GridItem>
                <GridItem colSpan={10} h='1px' w='full' bg='grey'/>
                <GridItem colSpan={2}>Language</GridItem>
                <GridItem colSpan={3} as='b'>
                    {country?.name?.common ===  "Antarctica" ? (<p></p>) : (<p>{country?.languages[Object?.keys(country?.languages)[0]]}</p>)}
                </GridItem>
                <GridItem colSpan={2}>Population</GridItem>
                <GridItem colSpan={3} as='b'>{country?.population.toLocaleString()}</GridItem>
                <GridItem colSpan={10} h='1px' w='full' bg='grey'/>
                <GridItem colSpan={2}>Borders</GridItem>
                {/* <GridItem colSpan={3} as='b'>{country?.borders}</GridItem> */}
                <GridItem colSpan={3} as='b'>Erase them all</GridItem>
                <GridItem colSpan={2}>Time zone</GridItem>
                <GridItem colSpan={3} as='b'>{country?.timezones[0]}</GridItem>
                <GridItem colSpan={10} h='1px' w='full' bg='grey'/>
                <GridItem colSpan={1}><PhoneIcon /></GridItem>
                {/* //Arreglar prefijo para que solo haya máximo de 4 dígitos o así. problema con eeuu */}
                <GridItem colSpan={1} as='b'>{country?.idd[Object?.keys(country?.idd)[0]]}{country?.idd[Object?.keys(country?.idd)[1]]}</GridItem>
                <GridItem colSpan={1}><AtSignIcon /></GridItem>
                <GridItem colSpan={1} as='b'>{country?.tld[0]}</GridItem>
                <GridItem colSpan={1}><BsCurrencyExchange /></GridItem>
                <GridItem colSpan={5} as='b'>
                    {country?.name?.common ===  "Antarctica" || "Heard Island and McDonald Islands" ? (<p></p>) : (<p>{country?.currencies[Object?.keys(country?.currencies)[0]]?.name}</p>)}
                </GridItem>
                <GridItem colSpan={10} h='1px' w='full' bg='grey'/>
                <GridItem colSpan={5} as='b'>
                    {country?.unMember ? (<p>Member of the UN</p>) : (<p>Non member of the UN</p>)}
                </GridItem>
                <GridItem colSpan={5} as='b'>
                    {country?.independent ? (<p>Independent country</p>) : (<p>Non independent country</p>)}
                </GridItem>
            </Grid>
        </>
    );
};

export default CountryCardDetail;