import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
background-color: #3fea;
  color: #fefefe;
  padding: 1rem 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Sisay A & Abel  © {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;
