import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <Navbar>
            <h1>
                <Link id="logo" to="/">
                    Baithak
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/suggestion">2. Our Services</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/suggestion" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                    />
                </li>
            </ul>

        </Navbar>
    );
}
const Navbar = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top:0;
    z-index: 10;
    a {
        color:white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
    padding-left: 10rem;
    position: relative;
    color: white;
  }
    #logo {
        font-size: 1.5rem;
        font-family: 'Indie Flower', cursive;
        font-weight: lighter;
    }
    @media (max-width:1300px){
        flex-direction: column;
        padding:2rem 1rem;
        #logo {
            display:inline-block;
            margin: 1rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width:100%
        };
        li {
            padding:0
        }
    }
`
const Line = styled(motion.div)`
    height:.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom : -80%;
    left: 60%;
    @media (max-width:1300px){
        left:0%;
    }
`
export default Nav;