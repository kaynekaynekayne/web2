import React from 'react'
import around from '../img/around.png';
import Detail from '../components/detail';

const Word = () => {
    return (
        <Detail 
            title="My Words"
            deployURL="https://my-words.netlify.app/"
            githubURL="https://github.com/kaynekaynekayne/words"
            // mainImg={around}
            frontend="React, CSS, LocalStorage"
            description="위의 프로젝트는 React를 이용하여 단어장과 단어 퀴즈 페이지로 구성되어 있는 웹 어플리케이션 프로젝트입니다. Local Storage를 이용하여 사용자가 리스트를 추가, 읽기, 수정, 삭제할 수 있도록 구현하였습니다. 이렇게 로컬 스토리지에 저장된 단어들로 퀴즈를 풀 수 있도록 만들었으며, 퀴즈를 풀기 전에 문제 수 등을 선택할 수 있도록 설정하였습니다."
        />
    )
}

export default Word;