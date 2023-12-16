import React from "react";
import styled from "styled-components";
import PharmacyContents from "./pharmacyContents";
import HospitalContents from "./hospitalContents";

export default function Contents() {
  return (
    <Wrapper>
      <PharmacyContents></PharmacyContents>
      <HospitalContents></HospitalContents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 1100px;
  color: #ffffff;
  padding: 0 50px;
`;
