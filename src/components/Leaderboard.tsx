import React, { useEffect } from "react";
import { Ranking } from "../interfaces/Ranking";
import styles from "./Leaderboard.module.css";
import { Category } from "../interfaces/Category";
import { loadCurrentRanking } from "../services/loadRanking";

const Leaderboard = () => {
  const [rankings, setRankings] = React.useState<Ranking[]>([]);

  // TODO: Just sample data for, will be built over the own ranking
  const categories: Category[] = [
    { id: 1, name: "Fantasia", tiebreaking: true },
    { id: 2, name: "Comissão de Frente", tiebreaking: true },
  ];

  const getLeaderboard = async () => {
    const currentRanking: Ranking[] = await loadCurrentRanking();
    setRankings(currentRanking);
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <div className={styles.container}>
      <h2> Carnival Leaderboard - SP</h2>
      <div className={styles.leaderboard_header}>
        <div className={styles.header_item}>#</div>
        <div className={styles.header_item}>Name</div>
        <div className={styles.header_item}>Grade</div>
        {categories.map((item, index) => (
          <div key={index} className={styles.header_item}>
            {item.name}
          </div>
        ))}
      </div>
      <div className={styles.leaderboard}>
        {rankings.map((item, index) => (
          <div key={index} className={styles.leaderboard_line}>
            <div className={styles.leaderboard_line_small}>{item.position}</div>
            <div className={styles.leaderboard_line_large}>
              {item.schoolName}
            </div>
            <div className={styles.leaderboard_line_small}>{item.score}</div>
            <div className={styles.leaderboard_line_small}>{item.score}</div>
            <div className={styles.leaderboard_line_small}>{item.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
