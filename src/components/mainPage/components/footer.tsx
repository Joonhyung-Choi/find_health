import React from "react";
import styled from "styled-components";
export default function Footer() {
  const GITHUBURL = "https://github.com/Joonhyung-Choi/find_health";
  const EMAIL = "joonhyungaaa@gmail.com";
  const APIINFORMAION =
    "국립중앙의료원 전국 약국 정보 조회 서비스, 건강보험심사평가원 병원정보서비스";
  return (
    <Wrapper>
      <InformationDiv>
        <Information>깃허브 주소: {GITHUBURL}</Information>
        <Information>이메일: {EMAIL}</Information>
        <Information>api 정보: {APIINFORMAION}</Information>
      </InformationDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  padding: 0 180px;
  color: #ffffff;
`;

const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ffffff;
  height: 100px;
  width: 100%;
  padding: 10px 25px;
`;

const Information = styled.div`
  font-size: 15px;
`;
