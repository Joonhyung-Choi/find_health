import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Wrapper>
      <InformationDiv>
        <Information>깃허브 주소 :</Information>
        <Information>이메일 :</Information>
        <Information>api 정보 :</Information>
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
