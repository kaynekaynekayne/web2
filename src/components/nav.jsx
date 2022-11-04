import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


const Nav = () => {
    const [clickedPj,setClickedPj]=useState(true);
    const navigate=useNavigate();

    const clickMenu=(e)=>{
        if(e.target.innerText==="Projects"){
            setClickedPj(true);
            navigate("/");
        } else if(e.target.innerText==="About me"){
            setClickedPj(false);
            navigate("/about");
        }
    }
    return (
        <NavStyle>
            <ul>
                <li className={clickedPj ? "clicked" : ""} onClick={clickMenu}>Projects</li>
                <li className={clickedPj ? "" : "clicked"} onClick={clickMenu}>About me</li>
            </ul>
        </NavStyle>
    )
};

const NavStyle=styled.nav`
    ul{
        width:100%;
        display:flex;
        justify-content:flex-end;
    }
    li{
        width:5rem;
        height:2rem;
        margin-right:0.5rem;
        background-color: #cecece;
        color:black;
        text-align: center;
        border-bottom-left-radius:1rem;
        border-bottom-right-radius:1rem;
        cursor:pointer;
        
    }
    .clicked{
        background-color: #2d2d2d;
        color:white;
    }
`;

export default Nav