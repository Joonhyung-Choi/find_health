"use client";
import MapPage from "@/components/mapPage/mapPage";
import styled from "styled-components";

export default function Map() {
  return (
    <Wrapper>
      <MapPage />;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #40513b;
`;
