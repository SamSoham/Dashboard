import style from "./Statistics.module.css";
import prize from "../assets/prize.png";
import scoreImg from "../assets/score.png";
import percentileImg from "../assets/percentile.png";

export default function Stastics({ rank, percentile, score }) {
  return (
    <div className={style.main}>
      <p style={{ width: "fit-content" }}>Quick Statistics</p>
      <div className={style.container}>
        <div className={style.box}>
          <img src={prize} alt="PrizeImage" width="40px" />
          <div className={style.tag}>
            <p className={style.highlight}>{rank}</p>
            <p>Your Rank</p>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.box}>
          <img src={percentileImg} alt="PrizeImage" width="40px" />
          <div className={style.tag}>
            <p className={style.highlight}>{percentile}</p>
            <p>Percentile</p>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.box}>
          <img src={scoreImg} alt="PrizeImage" width="40px" />
          <div className={style.tag}>
            <p className={style.highlight}>{score}/15</p>
            <p>Correct Answers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
