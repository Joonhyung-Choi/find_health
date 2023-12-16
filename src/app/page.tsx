"use client";
import React from "react";
import MainPage from "@/components/mainPage/mainPage";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <MainPage />;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #40513b;
`;
