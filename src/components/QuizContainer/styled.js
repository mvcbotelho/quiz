import styled from "styled-components";

export const Container = styled.div`
  max-width: 1052px;
  margin: auto;
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 40px 10px;
`;

export const TitleText = styled.h2`
  width: 70%;
  font-family: Avenir;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  color: #000000;
`;

export const LevelBadger = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 550px;
  border: 1px solid #e4e4e6;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin: 13px 12px;
  background-color: #ffffff;
`;

export const Question = styled.div`
  width: 100%;
`;

export const QuestionText = styled.p`
  font-family: Avenir;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #1e2124;
  margin: 16px 40px;
`;

export const AnswerCard = styled.div`
  height: auto;
  min-height: 60px;
  border: 1px solid #e4e4e6;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  display: flex;
  margin: 8px 30px;
  background-color: #ffffff;
`;

export const AnswerText = styled.p`
  font-family: Avenir;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: #1e2124;
  padding: 12px 16px;
`;

export const AnswerButton = styled.button`
  min-width: 150px;
  min-height: 44px;
  background: #c9cccf;
  border-radius: 8px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 28px;
`;
