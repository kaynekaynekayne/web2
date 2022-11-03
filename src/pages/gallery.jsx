import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { pageAnimation } from '../style/animation';
import map from '../img/map.png';
import emergency from '../img/emergency-call.png';
import game from '../img/game.png';

const Gallery = () => {
    return (
        <Container>
            <div className="left">
                <div className='item-2x'>
                    {/* <h1>PRO</h1>
                    <h1>JECTS</h1> */}
                </div>
                <div className='item'></div>
            </div>
            <div className="right">
                <div className="item">
                    <Link to="/gallery/around">
                        <img src={map} alt="theater-map"/>
                        <h5>Around</h5>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/gallery/travel-call">
                        <img src={emergency} alt="emergency-call"/>
                        <h5>Travel Emergency Call</h5>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/gallery/game">
                        <img src={game} alt="game-control" />
                        <h5>Game Rating (임시)</h5>
                    </Link>
                </div>
            </div>
        </Container>
    )
};

const Container=styled.div`
    min-height:90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .item-2x{
        width:11rem;
        height:23rem;
        margin:1rem 0.5rem;
        border-radius: 1rem;
        border:3px solid white;
    }

    .item{
        width:11rem;
        height:11rem;
        margin:1rem 0.5rem;
        border-radius: 1rem;
        border:3px solid white;
        background-color: #f5f4f4;
        text-align:center;
        
        &:hover{
            cursor:pointer;
        }
        img{
            width:8rem;
            height:8rem;
            object-fit:cover;
            transition: all 0.5s ease-in-out;
            border-radius: 1rem;

            &:hover{
                transform: scale(1.13);
            }
        }
    }
`;



export default Gallery