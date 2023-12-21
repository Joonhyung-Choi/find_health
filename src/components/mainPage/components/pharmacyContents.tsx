import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Example from "../../../../public/example.svg";
import ContentsInformation from "./contentsInformation";
import { useRouter } from "next/navigation";

export default function PharmacyContents() {
  const router = useRouter();
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={Example} alt="Example SVG" fill />
      </ImageWrapper>
      <ContentsInformation
        coment1="간단하게 내 주변 약국을 찾아보세요"
        coment2="약국의 상세 정보를 확인해보세요"
        onClickShortcut={() => {
          router.push("/map");
        }}
      ></ContentsInformation>
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
