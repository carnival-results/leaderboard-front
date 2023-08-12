import React from "react";
import { Ranking } from "../interfaces/Ranking";
import styles from "./Leaderboard.module.css";
import { Category } from "../interfaces/Category";
import { loadLeaderboard } from "../services/loadLeaderboard";

interface LeaderboardProps {
  rankings: Ranking[];
  categories: Category[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ rankings, categories }) => {
  //  TODO use the information
  const leaderboard = loadLeaderboard();

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
