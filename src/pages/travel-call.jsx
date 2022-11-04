import React from 'react'
import call from '../img/call.png';
import Detail from '../components/detail';

const TravelCall = () => {
    return (
        <Detail 
            title="Travel Emergency Call"
            deployURL="https://travel-call.herokuapp.com/"
            githubURL="https://github.com/kaynekaynekayne/travel--call"
            mainImg={call}
            frontend="React, Bootstrap, Material-UI, Styled-Components"
            backend="Node.js, express, MongoDB, Firebase "
            purpose="해외 여행, 출장 등의 이유로 외국에 있을 때 만일의 상황을 대비하여, 대사관의 연락처와 현지의 긴급전화 번호들을 편리하게 검색하고 저장할 수 있는 플랫폼 구현"
            description="위의 프로젝트는 React를 이용하여 회원가입, 로그인, 검색, 저장 리스트 등의 페이지로 구성되어 있는 웹 어플리케이션 프로젝트입니다. Firebase를 통해서 회원가입과 로그인을 할 수 있도록 만들었으며, 국가 공공 데이터 포털의 외교부 국가, 지역별 현지연락처 openAPI를 이용하여 국가명을 검색하면 긴급상황 시 필요한 현지 연락처들이 화면에 출력되도록 구현하였습니다. 또한 매번 검색하는 것이 불편한 사용자들을 위해, mongo DB를 이용하여 현지 연락처가 적힌 페이지를 국가별로 저장할 수 있도록 설정하였습니다. 해당 웹페이지에 접속한 누구나 검색 결과를 볼 수 있지만, 연락처를 DB에 저장하는 것은 회원만 가능하도록 구현하였습니다."
            duration="3~4주"
        />
    )
}

export default TravelCall;