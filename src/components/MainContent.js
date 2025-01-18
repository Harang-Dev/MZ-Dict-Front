import React from "react";
import styled from "styled-components";
import SearchButton from "./SearchButton";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  color: #fff;
  background-color: #000;
  font-family: 'Amethysta', serif;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.2;
  pointer-events: none;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  z-index: 1;
`;

const MainTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  z-index: 1;
`;

const Line = styled.span`
  display: block;
`;

function MainContent() {
  return (
    <MainWrapper>
      <BackgroundImage src="/media/1.png" alt="Background" />
      <SubTitle>MZ세대의 언어로 가득 찬 힙한 단어사전</SubTitle>
      <MainTitle>
        <Line>MZ Generation</Line>
        <Line>Word Dictionary</Line>
      </MainTitle>
      <SearchButton />
    </MainWrapper>
  );
}

export default MainContent;
