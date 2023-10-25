import Analysis from "../component/Analysis";
import Donut from "../component/Donut";
import Graph from "../component/Graph";
import Modal from "../component/Modal";
import Stastics from "../component/Statistics";
import {useState } from "react";
import html from '../assets/html.png'
import style from '../component/Home.module.css'
import Sidebar from "../component/Sidenav";
import Navbar from "../component/Navbar";


export default function Home() {
  const [open, setOpen] = useState(false);
  const [state,setState] = useState({score:10,rank:12000,percentile:35})

  function handleSubmit(per,scr,rnk){
    setOpen(false)
    setState({score:scr,rank:rnk,percentile:per})
  }

  function handleClose(){
    setOpen(false)
  }

  return (
    <div>
      {
        open && <Modal handleClose={handleClose} handleSubmit={handleSubmit} state={state}/>
      }
      <Sidebar/>
     <div >
      
     <div className={style.box}>
     
      <div className={style.left}>
      <p>Skill Test</p> 
     <div className={style.main}>
        <div className={style.tag}>
            <img src={html} width="37px" height="50px" alt="icon"/>
            <div>
                <p className={style.head}>Hypertext Markup Language</p>
                <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            </div>
        </div>
        <button onClick={() => setOpen(true)} className={style.btn}>Update</button>
      </div>

      <Stastics percentile={state.percentile} score={state.score} rank={state.rank} />
      <Graph percentile={state.percentile} />
     </div>
    <div className={style.right}>
      <Analysis />
      <Donut score={state.score} />
    </div>
      </div>
     </div>
     
      
    </div>
  );
}
