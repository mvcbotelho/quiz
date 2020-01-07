import React from "react";
import * as S from "./styled";

const Title = () => {
  const pageTitle = localStorage.getItem("category");
  return (
    <S.TitleContainer>
      <S.TitleText>{pageTitle}</S.TitleText>
    </S.TitleContainer>
  );
};

export default Title;
