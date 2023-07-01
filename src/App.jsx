import './App.css';
import { Route, Routes } from "react-router-dom";

//Components imported
import Home from "./components/Home";
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';
import Game from './components/Game';

//Chakra imports
import { Flex } from '@chakra-ui/react';


function App() {
    return (
        <Flex className="App" direction="column" justify="left" align="center" >
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/countries" element={<Countries />} />
                    <Route exact path="/game" element={<Game />} />
                    <Route path="/countrydetail/:countryname" element={<CountryDetail/>} />
                </Routes>
            </div>
        </Flex>

    );
}

export default App;
