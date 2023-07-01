import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Chakra imports
import { Button, Flex, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Spacer } from "@chakra-ui/react";


const Game = () => {
    const [country, setCountry] = useState(null);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [green, setGreen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchCountry();
    }, []);

    const fetchCountry = async () => {
        try {
        const response = await axios.get('https://restcountries.com/v3.1/all');

        //Variables para crear las opciones aleatorias para el juego
        const countries = response.data;
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex];
        const flagUrl = randomCountry.flags.svg;

        //Asignación de países aleatorios
        setCountry({ name: randomCountry.name.common, flag: flagUrl });
        
        //Llamada a la función generadora de opciones
        generateOptions(countries, randomCountry);
        } catch (error) {
        console.error('Error fetching country:', error);
        }
    };

    //Función generadora de opciones
    const generateOptions = (countries, correctCountry) => {
        const options = [correctCountry.name.common];

        while (options.length < 3) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomOption = countries[randomIndex].name.common;

        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
        }

        // Ajustes para que las opciones de respuestas aparezcan en orden aleatorio. Así evitamos que la correcta esté en posición 0 del array.
        for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
        }

        setOptions(options);
    };

    //Función para gestionar la selección de la respuesta del jugador
    const handleOptionSelect = (selectedOption) => {
            if (selectedOption === country.name) {
            console.log('¡Respuesta correcta!');
            setGreen(true);
            setTimeout(() => {
                setGreen(false);
            }, 300);
            setScore(score + 1);
            if (score + 1 === 10 || score + 1 === 20) {
                setIsModalOpen(true);
            }
        } else {
            console.log('¡Respuesta incorrecta!');
            if (score > 0) {
                setScore(score - 1);
            }
        }
    
        fetchCountry();
    };

    const resetGame = () => {
        setScore(0);
        setGreen(false);
        setIsModalOpen(false);
        fetchCountry();
    };

    return (
        <Flex bg={green ? 'green.300' : 'gray.300'} borderRadius="md" p={5} direction='column' justify='space-around' align='center' transition="background-color 0.3s ease">
            {country && (
                <Flex p={5} direction='row' justify='center' align='center' wrap='wrap'>
                    <Flex direction='column' justify='center' align='left'>
                        <Flex direction='column' justify='space-between' align='left'>
                            <Text as='b' fontSize='3xl' textAlign="left">Global Flag Trivia</Text>
                            <Text as='b' maxW='300px' fontSize='lg' textAlign="left">Reach 10 points if you are able to!</Text>
                            <Spacer p={1}/>
                            <Text fontSize='md' maxW='300px' textAlign="left">Score system: +1 point for correct answers, -1 point for wrong answers. Good luck!</Text>
                        </Flex>
                        <Spacer p={3}/>
                        <Flex direction='row' justify='space-between' align='centers'>
                            <Button w='140px' onClick={resetGame}>Start again</Button>
                            <Spacer p={1}/>
                            <Button w='140px'>Points: {score}</Button>
                        </Flex>
                    </Flex>

                    <Spacer p={5}/>

                    <Flex direction='column' justify='center' align='center'>
                        <Image w='300px' h='300px' objectFit="contain" src={country.flag} alt="Bandera" />

                        <Spacer p={1}/>

                        {options.map((option) => (
                            <Flex align='center'>
                                <Button overflowWrap='break-word' w='300px' h='75px' wordWrap="break-word" my='5px' key={option} onClick={() => handleOptionSelect(option)}
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
                                {option}
                                </Button>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            )}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Congratulations!</ModalHeader>
                <ModalBody>
                    You have reached {score} points.
                </ModalBody>
                <ModalFooter>
                    <Button mx={8} onClick={resetGame}>Start again</Button>
                    <Button mx={8} onClick={() => setIsModalOpen(false)}>Go for {score + 10} points!</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </Flex>
    );
};

export default Game;
