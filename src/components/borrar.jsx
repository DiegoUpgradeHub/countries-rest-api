// import React from "react";
// import { useState, useEffect } from "react";

// //Chakra imports
// import { Flex, Input, InputGroup, InputLeftElement, Spacer, Select, Spinner, Text } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";

// //Components imports
// import CountryCard from "./CountryCard.jsx";


// const CountryList = () => {

//   const [data, setData] = useState([]);
//   const [data2, setData2] = useState([]);
//   const [selectInput, setSelectInput] = useState("all");
//   const [searchCountryInput, setSearchCountryInput] = useState("");

//   useEffect(() => {
//     if (selectInput === "all") {
//       fetch(`https://restcountries.com/v3.1/all`)
//         .then((res) => res.json())
//         .then((data) => {
//           return (
//             setData(data),
//             setData2(data))
//         })
//         .catch((err) => console.log("Error:", err.message));
//     } else {
//       fetch(`https://restcountries.com/v3.1/region/${selectInput}`)
//         .then((res) => res.json())
//         .then((data) => setData(data), setData2(data))
//         .catch((err) => console.log("Error:", err.message));
//     }

//   }, [data, selectInput]);

//   const handleChangeSelect = (e) => {
//     setSelectInput(e.target.value);
//   };

//   const handleInputCountry = (e) => {
//     e.preventDefault();
//     setSearchCountryInput(e.target.value);
//     setData(
//       data2.filter((country) =>
//         country?.name?.common
//           ?.toLowerCase()
//           ?.includes(e?.target?.value?.toLowerCase())
//       )
//     );
//   };

//   return (
//     <>
//       <Flex
//         className="countriesFilters"
//         justify="center"
//         align="center"
//         wrap="wrap"
//         maxWidth='100%'
//       >
//         <Flex
//           className="countriesFilters"
//           justify="center"
//           align="center"
//           wrap="wrap"
//         >
//           <InputGroup w='300px'>
//             <InputLeftElement pointerEvents='none'>
//               <SearchIcon color='gray.300' />
//             </InputLeftElement>
//             <Input type='text' placeholder='Search by name' value={searchCountryInput} onChange={handleInputCountry} />
//           </InputGroup>
//           <Spacer mx="5"/>
//           <Select onChange={handleChangeSelect} size='md' w='300px'>
//             <option value="all" default>Select a continent</option>
//             <option value="africa">Africa</option>
//             <option value="americas">Americas</option>
//             <option value="asia">Asia</option>
//             <option value="europe">Europe</option>
//             <option value="oceania">Oceania</option>
//             <option value="antarctic">Antarctic</option>
//           </Select>
//         </Flex>
//       </Flex>

//       {data2?.length === 0 ? (
//         <Flex
//           my='200px'
//           direction="column"
//           justify="center"
//           align="center"
//           wrap="wrap"
//         >
//           <Spinner thickness='5px'
//             speed='0.65s'
//             emptyColor='blue.200'
//             color='tomato'
//             size='xl'
//           />
//           <Text fontSize='4xl' as='b'>Loading</Text>
//         </Flex>
//       ) : (
//         <Flex 
//           w="100%"
//           justify="center"
//           align="center"
//           wrap="wrap"
//         >
//             {data?.map((country) => (
//               <Flex className="countriesDisplay"
//                 justify="center"
//                 align="center"
//                 wrap="wrap"
//               >
//                 <CountryCard country={country} key={country}/>
//               </Flex>
//             ))}
//         </Flex>
//       )}

//     </>
//   );
// }

// export default CountryList;

import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const formattedText = (
  <Box>
    <Heading as="h1" fontSize="2xl" mb="4">
      Bienvenido al proyecto API Rest Countries desarrollado por Diego Pérez.
    </Heading>

    <Text as="p">
      Global-Flag-Trivia. The game
    </Text>

    <Text as="p">
      En esta aplicación encontrarás el Global-Flag-Trivia, un juego que pondrá a prueba tus conocimientos de banderas y nombres de países del mundo. El objetivo es lograr 10 puntos. Te mostrará una bandera y deberás seleccionar la opción correcta entre tres posibles respuestas. Cada respuesta correcta sumará un punto y las incorrectas restarán un punto. Si alcanzas 10 puntos, aparecerá un modal de felicitación. También puedes reiniciar el juego en cualquier momento.
    </Text>

    <Text as="p">
      Listado de países
    </Text>

    <Text as="p">
      La página del listado de países te permite filtrar los países por nombre o continente y obtener información detallada sobre cada país haciendo clic en ellos.
    </Text>

    <Text as="p">
      Tecnologías utilizadas
    </Text>

    <UnorderedList>
      <ListItem>
        <Text as="b">React:</Text> Utilizado como biblioteca principal para construir la interfaz de usuario y gestionar el estado de la aplicación.
      </ListItem>
      <ListItem>
        <Text as="b">Chakra UI:</Text> Utilizado como biblioteca de componentes para la construcción de la interfaz de usuario, proporcionando componentes estilizados y personalizables.
      </ListItem>
      <ListItem>
        <Text as="b">Axios:</Text> Utilizado para realizar las solicitudes HTTP a la API REST de countries y obtener los datos necesarios para el juego y el listado de países.
      </ListItem>
    </UnorderedList>

    <Text as="p">
      Métodos
    </Text>

    <UnorderedList>
      <ListItem>
        <Text as="b">useEffect:</Text> Se utiliza para realizar una acción o efecto secundario después de que el componente se haya renderizado en el DOM. En este caso, se utiliza para llamar a la función fetchCountry al cargar el componente Game, asegurándose de obtener un país al azar para empezar el juego.
      </ListItem>
      <ListItem>
        <Text as="b">fetchCountry:</Text> Es una función asincrónica que utiliza la biblioteca Axios para realizar una solicitud GET a la API de países y obtener los datos de todos los países. Luego, se selecciona un país al azar y se generan las opciones para el juego mediante la función generateOptions.
      </ListItem>
      <ListItem>
        <Text as="b">generateOptions:</Text> Es una función que recibe los datos de todos los países y el país correcto seleccionado al azar. Genera opciones de respuesta aleatorias, incluyendo el país correcto y otros países aleatorios. Las opciones se barajan en orden aleatorio para evitar que la respuesta correcta esté siempre en la misma posición.
      </ListItem>
      <ListItem>
        <Text as="b">handleOptionSelect:</Text> Es una función que se ejecuta cuando el jugador selecciona una opción de respuesta. Compara la opción seleccionada con el nombre del país correcto y actualiza el estado del juego en función de si la respuesta es correcta o incorrecta. También actualiza el puntaje y, si se alcanza un puntaje específico, muestra un modal.
      </ListItem>
      <ListItem>
        <Text as="b">resetGame:</Text> Es una función que se ejecuta al reiniciar el juego. Restablece el puntaje, desactiva el color verde de fondo y cierra el modal.
      </ListItem>
      <ListItem>
        <Text as="b">handleChangeSelect:</Text> Es una función que se ejecuta cuando el jugador selecciona un continente en el componente CountryList. Actualiza el estado selectInput con el continente seleccionado y realiza una nueva solicitud a la API para obtener los países del continente seleccionado.
      </ListItem>
      <ListItem>
        <Text as="b">handleInputCountry:</Text> Es una función que se ejecuta cuando el jugador ingresa un texto en el campo de búsqueda del componente CountryList. Filtra los países según el nombre ingresado y actualiza el estado data con los países filtrados.
      </ListItem>
    </UnorderedList>
  </Box>
);

export default formattedText;
