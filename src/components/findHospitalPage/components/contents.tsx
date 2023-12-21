import React from "react";
import styled from "styled-components";

export default function Contents({
  type,
  contentsState,
  onClickNavigation,
}: {
  type: "top" | "bottom";
  contentsState: "" | "top" | "bottom";
  onClickNavigation: () => void;
}) {
  return (
    <Wrapper
      type={type}
      contentsState={contentsState}
      onClick={onClickNavigation}
    >
      {contentsState === "" ? (
        <ExplainDiv>
          {type === "top" ? "질병명으로 검색하기" : "질환 부위로 검색하기"}
        </ExplainDiv>
      ) : contentsState === "top" ? (
        <ContentsBox>
          <ExplainDiv>
            {type === "top" ? "질병명으로 검색하기" : "질환 부위로 검색하기"}
          </ExplainDiv>
          <Input />
        </ContentsBox>
      ) : (
        <FilterButtonDiv>
          <FilterButton>머리</FilterButton>
          <FilterButton>가슴</FilterButton>
          <FilterButton>배</FilterButton>
          <FilterButton>다리</FilterButton>
        </FilterButtonDiv>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  type: "top" | "bottom";
  contentsState: "" | "top" | "bottom";
}>`
  display: ${(props) =>
    props.contentsState === ""
      ? "flex"
      : props.type === props.contentsState
      ? "flex"
      : "none"};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.contentsState === ""
      ? "50%"
      : props.type === props.contentsState
      ? "100%"
      : ""};
  background-color: ${(props) =>
    props.type === "top" ? "#609966" : "#9DC08B"};
  font-size: 40px;
  cursor: ${(props) => (props.contentsState === "" ? "pointer" : "")};
  transition: 2s;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
`;

const ExplainDiv = styled.div``;

const Input = styled.input`
  height: 50px;
  width: 500px;
  font-size: 25px;
`;

const FilterButtonDiv = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterButton = styled.button`
  width: 150px;
  height: 100px;
  font-size: 25px;
  background-color: #609966;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
