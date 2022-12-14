import React from 'react'
import styled from 'styled-components';
import {BsGithub, BsEyeFill} from 'react-icons/bs';
import { pageAnimation } from '../style/animation';
import {motion} from 'framer-motion';

const Detail = ({title,deployURL,githubURL,mainImg,frontend,backend,description,duration}) => {
    return (
        <Container
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <div className='top'>
                <div className='main'>
                    <h1>{title}</h1>
                    <div className='btns'>
                        <BsEyeFill
                            onClick={()=>window.open(`${deployURL}`, "_blank")}
                            title="deploy" 
                            size="32"/> 
                        <BsGithub
                            onClick={()=>window.open(`${githubURL}`, "_blank")} 
                            title="github" 
                            size="32"/>
                    </div>
                </div>
                <img src={mainImg} alt="main-img" />
            </div>
            <div className='btm'>
                <div>
                    <h3>Description</h3>
                    <div className="line"></div>
                    <p>
                        {description} 
                    </p>
                </div>
                <div>
                    <h3>Frontend</h3>
                    <div className="line"></div>
                    <p>{frontend}</p>
                </div>
                {backend && 
                    <div>
                        <h3>Backend</h3>
                        <div className="line"></div>
                        <p>{backend}</p>
                    </div>
                }
                {duration && 
                    <div>
                        <h3>Duration</h3>
                        <div className="line"></div>
                        <span>{duration}</span>
                    </div>
                }
            </div>
        </Container>
    )
}

const Container=styled(motion.div)`
    padding:2rem 0;
    /* background-color: #1b1b1c;
    color:white; */
    .top{
        .main{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:1rem;

            h1{
                font-family: 'Playfair Display', serif;
            }

            svg{
                cursor:pointer;
                margin-left:1.5rem;
                color:#36353e;
                transition:all 0.3s ease;
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        img{
            width:100%;
        }
    }

    .btm{
        background-color: whitesmoke;
        
        .link{
            cursor:pointer;
            text-decoration: underline;
        }

        .line {
            /* width: 50%;
            background: #23d997;
            height: 0.5rem;
            margin: 1rem 0rem; */
        }
    }
`;
export default Detail;