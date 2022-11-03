import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { pageAnimation } from '../style/animation';
import around from '../img/around.png';
import map from '../img/map.png';
import emergency from '../img/emergency.png';
import game from '../img/game-control.png';

const Gallery = () => {
    return (
        <Container>
            <div className="left">
                <div className='item-2x'></div>
                <div className='item'></div>
            </div>
            <div className="right">
                <div className="item">
                    <Link to="/gallery/around">
                        <img src={map} alt="theater-map"/>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/gallery/travel-call">
                        <img src={emergency} alt="emergency-call"/>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/gallery/game">
                        <img src={game} alt="game-control" />
                    </Link>
                </div>
            </div>
        </Container>
    )
};

const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:90vh;

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
        background-color: #fdf8f876;
        
        &:hover{
            cursor:pointer;
        }
        img{
            width:11rem;
            height:11rem;
            object-fit:cover;
            transition: all 0.5s ease-in-out;
            border-radius: 1rem;

            &:hover{
                transform: scale(1.15);
            }
        }
    }
`;



export default Gallery