import axios from "axios";
import { Ranking } from "../interfaces/Ranking";

export const loadCurrentRanking = async () => {
  const rankings: Ranking[] = [];
  const request_url = `${process.env.REACT_APP_API_URL}/api/leaderboard/`;

  const response = await axios
    .create({
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
      },
    })
    .get(request_url);

  response.data.map((item: Ranking) => {
    rankings.push(item);
  });

  return rankings;
};
