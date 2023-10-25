import style from "./Analysis.module.css";

export default function Analysis() {
  return (
    <div className={style.container}>
      <p style={{ fontWeight: 600, fontSize: "20px" }}>Syllabuswise Analysis</p>
      <div className={style.box}>
        <p>HTML Tools, Forms, History</p>
        <div className={style.tag}>
          <div className={`${style.progress_bar} ${style.bar1}`}>
            <div className={`${style.indicator} ${style.ibar1}`}></div>
          </div>
          <p className={style.p1}>80%</p>
        </div>
      </div>
      <div className={style.box}>
        <p>Tags & References in HTML</p>
        <div className={style.tag}>
          <div className={`${style.progress_bar} ${style.bar2}`}>
            <div className={`${style.indicator} ${style.ibar2}`}></div>
          </div>
          <p className={style.p2}>60%</p>
        </div>
      </div>
      <div className={style.box}>
        <p>Tables & CSS Basics</p>
        <div className={style.tag}>
          <div className={`${style.progress_bar} ${style.bar3}`}>
            <div className={`${style.indicator} ${style.ibar3}`}></div>
          </div>
          <p className={style.p3}>24%</p>
        </div>
      </div>
      <div className={style.box}>
        <p>Tables & CSS Basics</p>
        <div className={style.tag}>
          <div className={`${style.progress_bar} ${style.bar4}`}>
            <div className={`${style.indicator} ${style.ibar4}`}></div>
          </div>
          <p className={style.p4}>96%</p>
        </div>
      </div>
    </div>
  );
}
