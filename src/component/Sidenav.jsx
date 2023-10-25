import style from "./Sidenav.module.css";
import dashboard from "../assets/dash.png";
import skill from "../assets/skill.png";
import intern from "../assets/intern.png";

export default function Sidebar() {
  return (
    <div className={style.sidenav}>
      <div className={style.tag}>
        <img src={dashboard} alt="Dashboard icon" width="20px" />
        <p>Dashboard</p>
      </div>
      <div className={style.tag1}>
        <img src={skill} alt="Dashboard icon" width="20px" />
        <p>Skill Test</p>
      </div>
      <div className={style.tag}>
        <img src={intern} alt="Dashboard icon" width="20px" />
        <p>Internships</p>
      </div>
    </div>
  );
}
