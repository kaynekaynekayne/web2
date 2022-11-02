import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {BsFillGridFill} from 'react-icons/bs';

const Nav = () => {
    return (
        <NavStyle>
            <h1><Link to="/">POR</Link></h1>
            <ul>
                <li>
                    <Link to="/">Projects</Link>
                    {/* <Link to="/"><BsFillGridFill size="24"/></Link> */}
                </li>
                <li>
                    <Link to="/about">About me</Link>
                </li>
            </ul>
        </NavStyle>
    )
};

const NavStyle=styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:15vh;
    padding: 3rem 1.5rem;
    color:black;
    background-color: rgb(228, 228, 228);
    ul{
        display:flex;
    }
    li{
        margin-left:2rem;
    }
`;

export default Nav