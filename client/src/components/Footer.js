import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

  const Footer = () => {
    return (
      <Box>
        <h1 style={{ color: "#fd9333",
                     textAlign: "center",
                     marginTop: "-1.5rem" ,
                     marginLeft: "-5rem",
                     fontSize:"1.8rem",
                    }}>
          Kagzaad Project by RutujaD, SakshiS and RheaS.
        </h1>
        <Container>
          <Row>
          </Row>
      </Container>
    </Box>
  );
};
export default Footer;