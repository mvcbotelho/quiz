import React from "react";
import * as S from "./styled";

const Card = ({ cardName, onClick }) => (
  <S.CardContainer onClick={onClick}>
    <S.CardTitle>{cardName}</S.CardTitle>
  </S.CardContainer>
);

export default Card;
