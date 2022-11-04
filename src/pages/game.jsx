import React from 'react'
import styled from 'styled-components';
import Button from '../components/button';
import game from '../img/game-home.png';



const Game = () => {
    return (
        <Container>
            <div className='top'>
                <div className='main'>
                    <h1>Game Rating Club</h1>
                    <div>
                        <Button text="배포"/>
                        <Button text="깃허브"/>
                    </div>
                </div>
                <img src={game} alt="game main" />
            </div>
            <div className='btm'>
                <h3>Summary</h3>
                <div>
                    <span>프론트엔드</span>
                    <p>React, SCSS, Redux-toolkit</p>
                </div>
                <div>
                    <span>목적</span>
                    <p>게임에 대한 전반적인 평가들을 제공하고 게임 유통 플랫폼으로 바로 이동할 수 있는 웹사이트 구현</p>
                </div>
                <div>
                    <span>설명</span>
                    <p>
                        위의 프로젝트는 React를 이용하여 인기 게임 목록, 장르별 게임 목록, 검색 목록, 게임에 대한 평가 등의 페이지로 구성되어 있는 웹 어플리케이션 프로젝트입니다. 
                        <span className="link" onClick={()=>window.open("https://rawg.io/apidocs", "_blank")}> 게임 데이터베이스 API</span>를 이용하여 조건에 맞는 게임 리스트를 출력하고 게임에 대한 별점, 평가, 메타크리틱, 게임 판매 사이트, 스크린샷 등을 확인할 수 있는
                        플랫폼을 구현하였습니다.</p>
                </div>
                <div>
                    <span>소요기간</span>
                    <span>1~2주</span>
                </div>
            </div>
        </Container>
    )
}

const Container=styled.div`
    padding:2rem 0;
    /* background-color: #1c1c1c;
    color:white; */

    .top{
        .main{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:1rem;
        }
        img{
            width:100%;
        }
    }

    .btm{
        .link{
            cursor:pointer;
            text-decoration: underline;
        }
    }
`;
export default Game;