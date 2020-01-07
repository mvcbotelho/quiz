import React, { useState, useEffect } from "react";
import * as S from "./styled";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Card from "../../components/Card";

import { api } from "../../services/api";

function App() {
  const [nameCategory, setNameCategory] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("category")) {
      localStorage.setItem("category", "Categoria");
    }
    api
      .get("?amount=10")
      .then(res => {
        const { results } = res.data;
        const newArr = [];

        results.map(nome => {
          newArr.push(nome.category);
          return newArr;
        });
        setNameCategory([...new Set(newArr)]);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Title />
      <S.Container>
        {nameCategory.map((category, i) => (
          <S.Navigation to="/quiz" key={i}>
            <Card
              cardName={category}
              onClick={() => {
                localStorage.setItem("category", category);
              }}
            />
          </S.Navigation>
        ))}
      </S.Container>
    </>
  );
}

export default App;
