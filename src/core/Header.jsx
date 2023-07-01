import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";


const Header = () => {

    return (
        <Flex className="navigation"
            direction="row"
            justify="center"
            align="center"
            wrap="wrap"
            m="10px"
        >
            <Flex hideFrom={'lg'} align='left'>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem>
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/game" className="link">
                                Game
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/countries" className="link">
                                Countries list
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <a target="_blank" href="https://diegoperez.vercel.app" rel="noreferrer">
                                Diego's website
                            </a>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex hideBelow={"lg"}>
                <Link to="/" className="link">
                <Button
                    m="10px"
                    p="25px"
                    w="175px"
                >
                Home</Button>
                </Link>
                <Link to="/game" className="link">
                <Button
                    m="10px"
                    p="25px"
                    w="175px"
                >
                Game</Button>
                </Link>
                <Link to="/countries" className="link">
                <Button
                    m="10px"
                    p="25px"
                    w="175px"
                >
                Countries list</Button>
                </Link>
                <a target="_blank" href="https://diegoperez.vercel.app" rel="noreferrer">
                <Button
                    m="10px"
                    p="25px"
                    w="175px"
                >
                Diego's website</Button>
                </a>

            </Flex>
        </Flex>
    )

}

export default Header