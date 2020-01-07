import React from "react";
import * as S from "./styled";

const QuizContainer = ({ question, questionNumber }) => (
  <S.Container>
    <S.CardContainer>
      <S.TitleContainer>
        <S.TitleText>Questão {questionNumber}</S.TitleText>
        <S.LevelBadger>
          level
          {/* <span>Level</span> */}
        </S.LevelBadger>
      </S.TitleContainer>
      <S.Question>
        <S.QuestionText>{question}</S.QuestionText>
      </S.Question>
      <S.AnswerCard>
        <S.AnswerText>respostas</S.AnswerText>
      </S.AnswerCard>
      <S.AnswerCard>
        <S.AnswerText>respostas</S.AnswerText>
      </S.AnswerCard>
      <S.AnswerCard>
        <S.AnswerText>respostas</S.AnswerText>
      </S.AnswerCard>
      <S.AnswerCard>
        <S.AnswerText>respostas</S.AnswerText>
      </S.AnswerCard>
      <S.AnswerButton>Responder</S.AnswerButton>
    </S.CardContainer>
  </S.Container>
);

export default QuizContainer;
