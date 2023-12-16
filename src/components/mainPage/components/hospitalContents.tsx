import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Example from "../../../../public/example.svg";
import ContentsInformation from "./contentsInformation";

export default function HospitalContents() {
  return (
    <Wrapper>
      <ContentsInformation
        coment1="내 증상에 맞는 병원을 찾아드려요"
        coment2="내 질환에 맞춰 어떤 병원을 가야되는지 알려드려요"
        onClickShortcut={() => {}}
      ></ContentsInformation>
      <ImageWrapper>
        <Image src={Example} alt="Example SVG" fill />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 550px;
  color: #ffffff;
  padding: 0 50px;
`;

const ImageWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 1280px) {
    width: 450px;
    height: 450px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 350px;
    height: 350px;
  }
`;
