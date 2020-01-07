import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import QuizContainer from "../../components/QuizContainer";

import { api_category, api } from "../../services/api";

const QuizPage = () => {
  const category = localStorage.getItem("category");

  const [categoryId, setCategoryId] = useState({});
  const [question, setQuestion] = useState("");

  useEffect(() => {
    api_category
      .get()
      .then(async res => {
        const { trivia_categories } = await res.data;
        setCategoryId(
          trivia_categories.find(categoryName => categoryName.name === category)
        );
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    api
      .get(`?amount=10&category=${categoryId.id}&type=multiple`)
      .then(async res => {
        const { results } = await res.data;
        setQuestion(results);
      })
      .catch(error => console.log(error));
  }, [categoryId]);

  const shuffledAnswer = question => {
    console.log("click");
    const answerArr = [];
    console.log(question);
    // const { correct_answer, incorrect_answers } = question;
    // console.log(correct_answer);
    // console.log(incorrect_answers);
  };

  return (
    <>
      <Header />
      <button onClick={() => shuffledAnswer()}>teste</button>
      <Title />
      {console.log(question)}
      {question &&
        question.map(({ question }, i) => {
          return (
            <QuizContainer question={question} questionNumber={`${i + 1}`} />
          );
        })}
    </>
  );
};

export default QuizPage;
