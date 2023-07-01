import React from "react";
import { Link,Text, Flex } from '@chakra-ui/react';

const Footer = () => {

    return (
        <Flex className="navigation"
            direction="row"
            justify="center"
            align="center"
            wrap="wrap"
            m="10px"
        >
            <Link href="https://diegoperez.vercel.app/" className="link" isExternal>
                <Text m="2px">Website developed by Diego Pérez</Text>
            </Link>
            <Text m="6px">|</Text>
            <Link href="https://github.com/DiegoUpgradeHub/countries-rest-api" className="link" isExternal>
                <Text m="2px">Check full code here</Text>
            </Link>
        </Flex>
    )

}

export default Footer