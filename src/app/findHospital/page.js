"use client";
import FindHospitalPage from "@/components/findHospitalPage/findHospitalPage";
import React from "react";
import styled from "styled-components";

export default function FindHospital() {
  return (
    <Wrapper>
      <FindHospitalPage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #40513b;
`;
