"use client";
import React from "react";
import styled from "styled-components";
import KakaoMap from "./components/kakaoMap";
import SideBar from "./components/sideBar";

export default function MapPage() {
  return (
    <Wrapper>
      <SideBar />
      <KakaoMap />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }
  background-color: #40513b;
  font-size: 30px;
  display: flex;
`;
