import React from "react";
import Leaderboard from "./components/Leaderboard";
import { Ranking } from "./interfaces/Ranking";
import { Category } from "./interfaces/Category";

const App = () => {
  const rankings: Ranking[] = [
    { position: 1, schoolName: "Dragões da Real", score: 10, categories: [] },
    { position: 1, schoolName: "Águia de Ouro", score: 10, categories: [] },
    { position: 2, schoolName: "Mancha Verde", score: 9.8, categories: [] },
    { position: 3, schoolName: "Gaviões da Fiel", score: 9.5, categories: [] },
  ];

  const categories: Category[] = [
    { id: 1, name: "Fantasia", tiebreaking: true },
    { id: 2, name: "Comissão de Frente", tiebreaking: true },
  ];

  return (
    <div>
      <Leaderboard rankings={rankings} categories={categories} />
    </div>
  );
};

export default App;
