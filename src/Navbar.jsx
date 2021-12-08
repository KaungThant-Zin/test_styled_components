import React, { useState } from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  padding: 0 2rem;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Menu = styled.div`
    padding: 0 1rem;
    display: flex;
    /* justify-content: space-between; */
    position: relative;
    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        height: ${({ isOpen }) => (isOpen ? "250px" : "0")};
        transition: height 0.4s ease-in;
    }
`;

const Logo = styled.div`
  padding: 1rem;
  font-size: 2rem;
  font-weight: 800;
  color: #005f73;
`;

const Bar = styled.div`
  display: none;
  flex-direction: column;
  span{
      height: 4px;
      width: 25px;
      margin-bottom: 4px;
      background-color: #005f73;
      border-radius: 2px;
  }
  @media(max-width: 768px){
      display: flex;
  }
`;

const MenuItem = styled.a`
  padding: 1rem;
  text-decoration: none;
  color: #005f73;
  text-align: center;
  &:hover{
      background-color:#ffba08;
      transition: 0.3s ease-in;
      border-radius: 10px;
      color: white;
  }
  @media(max-width: 768px){
      cursor: default;
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo>
                Navbar
            </Logo>
            <Bar onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Bar>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <MenuItem href="#home">
                    Home
                </MenuItem>
                <MenuItem href="#about">
                    About
                </MenuItem>
                <MenuItem href="#services">
                    Services
                </MenuItem>
                <MenuItem href="#contact">
                    Contact
                </MenuItem>
            </Menu>
        </Nav>
    )
}

export default Navbar
