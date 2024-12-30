import React, { useEffect, useState } from 'react';
import { Container, ContentBox, InputContainer, SubTitle, Title } from './style';
import InputComponent from '../../../components/InputComponent/InputComponent';
import { useNavigate } from 'react-router-dom';
import SubmitButtonComponent from '../../../components/SubmitButtonComponent/SubmitButtonComponent';

function AuthSignInPage() {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const emailOnChange = (e) => {
        setEmail(e.target.value);
    }
    
    const passwordOnChange = (e) => {
        setPassword(e.target.value);
    }

    const SignInButtonClickHandler = () => {
        alert('로그인 버튼 클릭');
    }

    useEffect(() => {
        console.log(email);
    }, [email]);

    useEffect(() => {
        console.log(password);
    }, [password]);
    

    return (
        <>
            <Container>
                <ContentBox>
                    <Title>SSADANG 관리자 로그인</Title>
                    <SubTitle>웹 관리자모드 로그인하세요.</SubTitle>
                    <InputContainer>
                        <InputComponent
                            type='text'
                            value={email}
                            onChange={emailOnChange}
                            placeholder='관리자 아이디(이메일) 입력'
                        />
                        <InputComponent
                            type='password'
                            value={password}
                            onChange={passwordOnChange}
                            placeholder='관리자 비밀번호 입력'
                        />
                        <SubmitButtonComponent
                            onClick={SignInButtonClickHandler}
                            text='로그인'
                        />
                    </InputContainer>
                </ContentBox>
            </Container>
        </>
    )
}

export default AuthSignInPage;