import React from 'react';
import { ButtonLayout, ButtonListContainer, Container, ManageContainer, ManageContainerTitle, ManageContainerTop, NoticeHeaderContainer, NoticeHeaderTitle } from './style';
import SubmitButtonComponent from '../../components/SubmitButtonComponent/SubmitButtonComponent';

function NoticePage() {
  return (
    <>
      <Container>
        <NoticeHeaderContainer>
          <NoticeHeaderTitle>공지사항</NoticeHeaderTitle>
        </NoticeHeaderContainer>
        <ManageContainer>
          <ManageContainerTop>
            <ManageContainerTitle>공지사항 관리</ManageContainerTitle>
            <ButtonListContainer>
              <ButtonLayout>
                <SubmitButtonComponent onClick={() => {alert('등록 버튼 클릭')}} text='등록'/>
              </ButtonLayout>
              <ButtonLayout>
                <SubmitButtonComponent onClick={() => {alert('수정 버튼 클릭')}} text='수정'/>
              </ButtonLayout>
              <ButtonLayout>
                <SubmitButtonComponent onClick={() => {alert('삭제 버튼 클릭')}} text='삭제'/>
              </ButtonLayout>
            </ButtonListContainer>
          </ManageContainerTop>
        </ManageContainer>
      </Container>
    </>
  )
}

export default NoticePage;