import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useRef } from "react";
import style from "./Modal.module.css";
import html from "../assets/html.png";
import arrow from "../assets/arrow.png";

export default function Modal({ handleSubmit, handleClose, state }) {
  const per = useRef();
  const scr = useRef();
  const rnk = useRef();

  return (
    <div className={style.modalOpen}>
      {useLockBodyScroll()}
      <div className={style.modal}>
        <div className={style.modalTag}>
          <p>Update Scores</p>
          <img src={html} alt="HTML img" width="35px" height="47px" />
        </div>
        <div className={style.line}></div>
        <div className={style.box}>
          <p className={style.para}>
            <p className={style.num}>1</p>Update your <span>rank</span>
          </p>
          <input type="text" ref={rnk} defaultValue={state.rank} />
        </div>
        <div className={style.box}>
          <p className={style.para}>
            <p className={style.num}>2</p>Update your <span>percentile</span>
          </p>
          <input type="text" ref={per} defaultValue={state.percentile} />
        </div>
        <div className={style.box}>
          <p className={style.para}>
            <p className={style.num}>3</p>Update your{" "}
            <span>current score(out of 15)</span>{" "}
          </p>
          <input type="text" ref={scr} defaultValue={state.score} />
        </div>
        <div className={style.line}></div>
        <div className={style.btn}>
          <button onClick={handleClose} className={style.btnOutline}>
            Cancel
          </button>
          <button
            onClick={() =>
              handleSubmit(
                per?.current?.value,
                scr?.current?.value,
                rnk?.current?.value
              )
            }
            className={style.btnFilled}
          >
            Save <img src={arrow} alt="arrow" width="18px" />
          </button>
        </div>
      </div>
    </div>
  );
}
