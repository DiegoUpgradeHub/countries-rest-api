import React from "react";
import { useState, useEffect } from "react";

//Chakra imports
import { Flex, Input, InputGroup, InputLeftElement, Spacer, Select, Spinner, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

//Components imports
import CountryCard from "./CountryCard.jsx";


const CountryList = () => {

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [selectInput, setSelectInput] = useState("all");
  const [searchCountryInput, setSearchCountryInput] = useState("");
  const [alphabetFilter, setAlphabetFilter] = useState("");
  const [populationFilter, setPopulationFilter] = useState("");

  useEffect(() => {
    if (selectInput === "all") {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setData2(data);
        })
        .catch((err) => console.log("Error:", err.message));
    } else {
      fetch(`https://restcountries.com/v3.1/region/${selectInput}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setData2(data);
        })
        .catch((err) => console.log("Error:", err.message));
    }
  }, [selectInput]);

  useEffect(() => {
    if (alphabetFilter === "asc") {
      const sortedData = [...data].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setData(sortedData);
    } else if (alphabetFilter === "desc") {
      const sortedData = [...data].sort((a, b) =>
        b.name.common.localeCompare(a.name.common)
      );
      setData(sortedData);
    }
  }, [alphabetFilter, data]);

  useEffect(() => {
    if (populationFilter === "asc") {
      const sortedData = [...data].sort((a, b) =>
        a.population - b.population
      );
      setData(sortedData);
    } else if (populationFilter === "desc") {
      const sortedData = [...data].sort((a, b) =>
        b.population - a.population
      );
      setData(sortedData);
    }
  }, [populationFilter, data]);

  // const handleChangeSelect = (e) => {
  //   setSelectInput(e.target.value);
  // };

  const handleInputCountry = (e) => {
    setSearchCountryInput(e.target.value);
    setData(
      data2.filter((country) =>
        country?.name?.common
          ?.toLowerCase()
          ?.includes(e?.target?.value?.toLowerCase())
      )
    );
  };

  const handleAlphabetFilter = (e) => {
    setAlphabetFilter(e.target.value);
  };

  const handlePopulationFilter = (e) => {
    setPopulationFilter(e.target.value);
  };

  return (
    <>
      <Flex className="countriesFilters" justify="center" align="center" wrap="wrap" maxWidth="100%">
        <Flex className="countriesFilters" direction={{base: 'column', lg: 'row'}} justify="center" align="center" wrap="wrap">
          <InputGroup w="300px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search by name" value={searchCountryInput} onChange={handleInputCountry} />
          </InputGroup>
          {/* <Spacer mx="5" />
          <Select onChange={handleChangeSelect} size="md" w="300px">
            <option value="all" default>
              Select a continent
            </option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="antarctic">Antarctic</option>
          </Select> */}
          <Spacer m='5px' />
          <Select onChange={handleAlphabetFilter} size="md" w="300px">
            <option value="" default>
              Sort alphabetically
            </option>
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </Select>
          <Spacer m='5px' />
          <Select onChange={handlePopulationFilter} size="md" w="300px">
            <option value="" default>
              Sort by population
            </option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Flex>
      </Flex>

      {data2?.length === 0 ? (
        <Flex my="200px" direction="column" justify="center" align="center" wrap="wrap">
          <Spinner thickness="5px" speed="0.65s" emptyColor="blue.200" color="tomato" size="xl" />
          <Text fontSize="4xl" as="b">
            Loading
          </Text>
        </Flex>
      ) : (
        <Flex w="100%" justify="center" align="center" wrap="wrap">
          {data?.map((country) => (
            <Flex className="countriesDisplay" justify="center" align="center" wrap="wrap" key={country.name.common}>
              <CountryCard country={country} />
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
}

export default CountryList;


