import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

//Components imports
import App from './App';
import Footer from "./core/Footer.jsx";
import Header from "./core/Header.jsx";

//Chakra imports
import { Flex } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ChakraProvider>
      <Flex className="Index" direction="column" justify="left" align="center">

        <Header />
        <App />
        <Footer />

      </Flex>
    </ChakraProvider>
  </Router>
);

