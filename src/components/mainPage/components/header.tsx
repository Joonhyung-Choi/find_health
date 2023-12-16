import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <Wrapper>
      <Logo>
        Find
        <br />
        Health
      </Logo>
      <NavigationDiv>
        <NavigationButton>약국 검색</NavigationButton>
        <NavigationButton>병원 검색</NavigationButton>
      </NavigationDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  color: #ffffff;
  padding: 0 50px;
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

const NavigationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 100%;
  margin-right: 50px;
`;

const NavigationButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: 25px;
`;
