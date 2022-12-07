import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import map from '../img/map.png';
import emergency from '../img/emergency-call.png';
import game from '../img/game.png';
import mywords from '../img/my-words.png';

const Gallery = () => {
    return (
        <Container>
            <div className="left">
                {/* <h4>main</h4> */}
                <div className="item item-main">
                    <Link to="/around">
                        <img src={map} alt="theater-map"/>
                        <h5>Around</h5>
                    </Link>
                </div>
                <div className="item item-main">
                    <Link to="/travel-call">
                        <img src={emergency} alt="emergency-call"/>
                        <h5>Travel Emergency Call</h5>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/game">
                        <img src={game} alt="game-control" />
                        <h5>Game Rating Club</h5>
                    </Link>
                </div>
            </div>
            <div className="right">
                {/* <h4>sub</h4> */}
                <div className='item'>
                
                </div>
                <div className='item'>
                
                </div>
                <div className='item'>
                    <Link to="/my-words">
                        <img src={mywords} alt="dictionary"/>
                        <h5>My Words</h5>
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
    text-align:center;
    
    /* .item-2x{
        width:11rem;
        height:23rem;
        margin:1rem 0.5rem;
        border-radius: 1rem;
        border:3px solid white;
        color:whitesmoke;
    } */

    .item{
        width:11rem;
        height:11rem;
        margin:1rem 0.5rem;
        border-radius: 1rem;
        border:3px solid white;
        background-color: #f4f4f4;
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

    .item-main{
        border:5px solid white;

    }
`;



export default Gallery