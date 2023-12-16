"use client";
import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Contents from "./components/contents";
import Footer from "./components/footer";
export default function MainPage() {
  return (
    <Wrapper>
      <Header />
      <Contents />
      <Footer />
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
  width: 1024px;
  height: 1400px;
  background-color: #40513b;
  font-size: 30px;
`;
