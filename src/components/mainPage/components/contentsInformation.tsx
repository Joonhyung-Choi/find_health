import React from "react";
import styled from "styled-components";

export default function ContentsInformation({
  coment1,
  coment2,
  onClickShortcut,
}: {
  coment1: string;
  coment2: string;
  onClickShortcut: () => void;
}) {
  return (
    <Wrapper>
      <ComentDiv>
        <Coment>{coment1}</Coment>
        <Coment>{coment2}</Coment>
      </ComentDiv>

      <ShortcutA>바로가기</ShortcutA>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: 150px;
  color: #ffffff;
  padding: 15px 0;
  font-size: 18px;
  border: 1px solid #ffffff;
  line-height: 25px;
`;

const ComentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
`;

const Coment = styled.div``;

const ShortcutA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
