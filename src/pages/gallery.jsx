import React from 'react';
import {Link} from 'react-router-dom';
import around from '../img/around.png';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { pageAnimation } from '../style/animation';



const Gallery = () => {
    return (
        <Container
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <Box>
                <h1>Around</h1>
                <div className='img-box'>
                    <Link to="/gallery/around">
                        <img src={around} alt=""/>
                    </Link>
                </div>
                <div className="line"></div>
                <div className='summary'>
                    <p>공연장까지 가장 쉬운 길찾기</p>
                </div>
            </Box>
            <Box>
                <h1>Travel Call</h1>
                <div className='img-box'>
                    <Link to="/gallery/travel-call">
                        <img src={around} alt=""/>
                    </Link>
                </div>
                <div className="line"></div>
                <div>
                    {/* <p>dsffsdf</p> */}
                </div>
            </Box>
            <Box>
                <h1>Play Games</h1>
                <div className='img-box'>
                    <Link to="/gallery/play-games">
                        <img src={around} alt=""/>
                    </Link>
                </div>
                <div>
                    {/* <p>dsffsdf</p> */}
                </div>
            </Box>
            
        </Container>
    )
};

const Container=styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const Box=styled.div`
    padding:3rem 0;
    h1{
        margin-bottom: 1rem;
    }
    .img-box{
        width:70vw;
        height:50vh;
        margin:0 auto;
        overflow:hidden;
    }
    img{
        transition:all 0.5s ease-in-out;
        &:hover{
            transform: scale(1.3);
        }
    }
    .line{
        height:0.5rem;
        background:#cccccc;
        margin-bottom: 3rem;
    }

    .summary{
        width:20rem;
        height:10rem;
        border:1px solid black;
    }
`;


export default Gallery