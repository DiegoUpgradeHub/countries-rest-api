import React from 'react';
import { Link } from "react-router-dom";

//Chakra ui imports
import { Box, Text, UnorderedList, ListItem, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Spacer, Flex } from "@chakra-ui/react";


const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box justify='left' align='left' maxW='700px' p={5}>
            <Text as="b" fontSize="3xl" mb="4">
            Welcome to Diego's API Rest Project.
            </Text>
            <Spacer p={1}/>
            <Text as="b" fontSize="2xl" mb="4">
            The Rest Countries API provides detailed information about countries.
            </Text>

            <Spacer p={3}/>

            <Flex direction='row' wrap='wrap' justify='center' align='center'>
                <Link to="/game" className="link">
                    <Button h='60px' w='300px' m={5} borderRadius="md" overflowWrap='break-word'
                        sx={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Play Flag's quiz
                    </Button>
                </Link>
                <Link to="/countries" className="link">
                    <Button h='60px' w='300px' maxWidth='300px' borderRadius="md" overflowWrap='break-word'
                        sx={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Check countries list
                    </Button>
                </Link>
            </Flex>

            <Spacer p={3}/>

            <Text as="b" fontSize='xl'>
            Global-Flag-Trivia. The game
            </Text>
            <Text as="p">
            A game that will test your knowledge of flags and country names from around the world. The goal is to reach 10 points. You will be shown a flag and you need to select the correct option among three possible answers. Each correct answer will earn you one point, while incorrect answers will deduct one point. If you reach 10 points, a congratulatory modal will appear. You can also restart the game at any time.
            </Text>

            <Spacer p={3}/>

            <Text as="b" fontSize='xl'>
            Country List. Information query
            </Text>
            <Text as="p">
            On the country list page, you can filter countries by name and alphabetical or population order. As well as get detailed information about each country by clicking on them.
            </Text>

            <Spacer p={3}/>

            <Button w='100%' onClick={onOpen}>
            Technologies and methods used
            </Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='xl' scrollBehavior='inside' isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Technologies and methods used
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text as="b" fontSize='xl'>
                            Technologies
                        </Text>
                        <UnorderedList>
                        <ListItem>
                            <Text as="b">React:</Text> Used as the core library for building the user interface and managing the application state.
                        </ListItem>
                        <ListItem>
                            <Text as="b">Chakra UI:</Text> Used as a component library for building the user interface, providing stylish and customizable components.
                        </ListItem>
                        <ListItem>
                            <Text as="b">Axios:</Text> Used for making HTTP requests to the Rest Countries API and fetching the necessary data for the game and country list.
                        </ListItem>
                        </UnorderedList>
                    
                        <Text as="b" fontSize='xl'>
                        Methods
                        </Text>
                        <UnorderedList>
                        <ListItem>
                            <Text as="b">useEffect:</Text> Used to perform a side effect or action after the component has been rendered to the DOM. In this case, it is used to call the fetchCountry function when the Game component is loaded, ensuring that a random country is obtained to start the game.
                        </ListItem>
                        <ListItem>
                            <Text as="b">fetchCountry:</Text> An asynchronous function that uses the Axios library to make a GET request to the countries API and fetch the data of all countries. Then, a random country is selected, and the options for the game are generated using the generateOptions function.
                        </ListItem>
                        <ListItem>
                            <Text as="b">generateOptions:</Text> A function that takes the data of all countries and the randomly selected correct country. It generates random answer options, including the correct country and other random countries. The options are shuffled randomly to prevent the correct answer from always being in the same position.
                        </ListItem>
                        <ListItem>
                            <Text as="b">handleOptionSelect:</Text> A function that is executed when the player selects an answer option. It compares the selected option with the name of the correct country and updates the game state based on whether the answer is correct or incorrect. It also updates the score and, if a specific score is reached, displays a modal.
                        </ListItem>
                        <ListItem>
                            <Text as="b">resetGame:</Text> A function that is executed when the game is reset. It resets the score, deactivates the green background color, and closes the modal.
                        </ListItem>
                        <ListItem>
                            <Text as="b">handleChangeSelect:</Text> A function that is executed when the player selects a continent in the CountryList component. It updates the selectInput state with the selected continent and makes a new request to the API to fetch countries from the selected continent.
                        </ListItem>
                        <ListItem>
                            <Text as="b">handleInputCountry:</Text> A function that is executed when the player enters text in the search field of the CountryList component. It filters countries based on the entered name and updates the data state with the filtered countries.
                        </ListItem>
                        </UnorderedList>
                    </ModalBody>
                    <ModalFooter align='center' justify='center'>
                        <Button colorScheme='blue' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </Box>
)}

export default Home