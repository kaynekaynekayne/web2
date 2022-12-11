import React from 'react'
import around from '../img/around.png';
import Detail from '../components/detail';

const Around = () => {
    return (
        <Detail 
            title="Around"
            deployURL="https://howcanigothere.herokuapp.com/"
            githubURL="https://github.com/kaynekaynekayne/pj09--final"
            mainImg={around}
            frontend="React, Styled-Components, Material-UI"
            backend="Node.js, express, MongoDB"
            purpose="공연을 예매한 후 공연장까지 어떻게 가는지 찾아볼 때 마다 포털에 공연명 검색, 공연장 확인, 지도 웹사이트 접속, 길찾기의 순서를 통해서 검색해야 하는 불편함이 있었습니다. 공연명을 입력하면 바로 지도에 장소가 표시되고 길찾기 서비스를 쉽게 이용할 수 있는 플랫폼을 구현하려고 했습니다."
            description="위의 프로젝트는 React를 이용하여 회원가입, 로그인, 검색, 공연 정보, 지도 등의 페이지로 구성되어 있는 웹 어플리케이션 프로젝트입니다. Mongo DB를 통해서 회원가입, 로그인, 닉네임 수정이 가능하며, 공연 예술 통합전산망의 openAPI를 이용하여 국내의 공연 리스트들을 출력하였습니다. 또한 Google Map API를 이용하여 공연장이 지도 중앙에 표시되고 공연장의 주소가 목적지 입력란에 자동으로 입력되도록 설정하였습니다. 이를 통해서 출발지만 입력하면 공연장까지 걸리는 시간, 거리, 대중교통 등이 나타나도록 구현하였습니다."
            duration="약 4주"
        />
    )
}

export default Around;