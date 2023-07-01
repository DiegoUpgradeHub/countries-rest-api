import React from "react";

//Chakra imports
import { Flex, Box, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

//Components imports
import CountryCardDetail from "./CountryCardDetail.jsx";

const CountryCard = ({ country }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    let countryMap = country?.maps?.googleMaps;

    return (
        <Box w='350px' h='210' bg='gray.300' m='2' borderRadius='10' p='4'>
            <Flex
                direction="column"
                justify="center"
                align="center"
                wrap="wrap"
            >
                <Text as='b'>
                    {country?.name?.common}
                </Text>
                <Box w='80%' h='1px' bg='gray.900'></Box>
                <Flex
                    direction="row"
                    justify="center"
                    align="center"
                    wrap="wrap"
                >
                    <Image
                        src={country?.flags?.svg}
                        alt={country?.name?.common}
                        borderRadius='full'
                        boxSize='75px'
                        objectFit='cover'
                        my='2'
                    />
                    <Box ml="4" h='70px' w='1px' bg='gray.900'></Box>
                    <Box m='2'
                        direction="column"
                        justify="left"
                        align="left"
                        wrap="wrap"
                    >
                        <Text>
                            Continent:
                        </Text>
                        <Text as='b'>
                            {country?.region}
                        </Text>
                        <Text>
                            Capital:
                        </Text>
                        <Text as='b'>
                            {country?.name?.common ===  "South Africa" ? (<p>Cape Town</p>) : (<p>{country?.capital}</p>)}
                        </Text>
                    </Box>
                </Flex>
                <Button w='100%' onClick={onOpen}>More details</Button>
            </Flex>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='xl' scrollBehavior='inside' isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{country?.name?.common}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CountryCardDetail country={country} key={country}/>
                    </ModalBody>
                    <ModalFooter align='center' justify='center'>
                        <Button colorScheme='blue' mr={3} onClick={() => window.open(countryMap, "_blank") }>Google Maps</Button>
                        <Button colorScheme='blue' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>


    );
};

// export default CountryCard;
export default CountryCard;