import React from 'react'
import game from '../img/game-home.png';
import Detail from '../components/detail';

const Game = () => {
    return (
        <Detail
            title="Game Rating Club."
            deployURL="https://play-every-game.netlify.app/"
            githubURL="https://github.com/kaynekaynekayne/game_refac"
            mainImg={game}
            frontend="React, SCSS, Redux-toolkit"
            purpose="게임에 대한 전반적인 평가들을 제공하고 게임 유통 플랫폼으로 바로 이동할 수 있는 웹사이트 구현"
            description="위의 프로젝트는 React를 이용하여 인기 게임 목록, 장르별 게임 목록, 검색 목록, 게임에 대한 평가 등의 페이지로 구성되어 있는 웹 어플리케이션 프로젝트입니다. 게임 데이터베이스 API를 이용하여 조건에 맞는 게임 리스트를 출력하고 게임에 대한 별점, 평가, 메타크리틱, 게임 판매 사이트, 스크린샷 등을 확인할 수 있는 플랫폼을 구현하였습니다."
            duration="1~2주"
        />
    )
}

export default Game;