"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Contents from "./components/contents";
import { useRouter } from "next/navigation";

export default function FindHospitalPage() {
  const router = useRouter();
  const [contentsState, setContentsState] = useState<"" | "top" | "bottom">("");
  return (
    <Wrapper>
      <Contents
        type="top"
        contentsState={contentsState}
        onClickNavigation={() => {
          setContentsState("top");
        }}
      />
      <Contents
        type="bottom"
        contentsState={contentsState}
        onClickNavigation={() => {
          setContentsState("bottom");
        }}
      />
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
  height: 900px;
  background-color: #40513b;
  font-size: 30px;
  color: #ffffff;
`;
