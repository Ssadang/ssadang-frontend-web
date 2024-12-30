import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, ContentBox, RouteButton } from './style';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const [ focus, setFocus ] = useState({
        main: '',
        notice: '',
        authorization: '',
        traffic: '',
        question: '',
    })

    const RouteButtonOnClickHandler = (target) => {
        setFocus({
            main: target === 'main' ? 'active' : '',
            notice: target === 'notice' ? 'active' : '',
            authorization: target === 'authorization' ? 'active' : '',
            traffic: target === 'traffic' ? 'active' : '',
            question: target === 'question' ? 'active' : '',
        })
        navigate(`/${target}`);
    }

    useEffect(() => {
        if(location.pathname.startsWith('/main')) {
            setFocus({
                main: 'active',
                notice: '',
                authorization: '',
                traffic: '',
                question: '',
            })
        }else if(location.pathname.startsWith('/notice')) {
            setFocus({
                main: '',
                notice: 'active',
                authorization: '',
                traffic: '',
                question: '',
            })
        }else if(location.pathname.startsWith('/authorization')) {
            setFocus({
                main: '',
                notice: '',
                authorization: 'active',
                traffic: '',
                question: '',
            })
        }else if(location.pathname.startsWith('/traffic')) {
            setFocus({
                main: '',
                notice: '',
                authorization: '',
                traffic: 'active',
                question: '',
            })
        }else if(location.pathname.startsWith('/question')) {
            setFocus({
                main: '',
                notice: '',
                authorization: '',
                traffic: '',
                question: 'active',
            })
        }
    }, [location]);

    return (
        <Container>
            <ContentBox>
                <RouteButton className={focus.main} onClick={() => RouteButtonOnClickHandler('main')}>SSADANG</RouteButton>
                <RouteButton className={focus.notice} onClick={() => RouteButtonOnClickHandler('notice')}>공지사항</RouteButton>
                <RouteButton className={focus.authorization} onClick={() => RouteButtonOnClickHandler('authorization')}>가입 승인</RouteButton>
                <RouteButton className={focus.traffic} onClick={() => RouteButtonOnClickHandler('traffic')}>트래픽 차트</RouteButton>
                <RouteButton className={focus.question} onClick={() => RouteButtonOnClickHandler('question')}>문의 사항</RouteButton>
            </ContentBox>
        </Container>
    )
}

export default Header;