import  style from './Sidenav.module.css'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'


export default function Navbar(){
    return (
        <div className={style.main}>
          <img src={logo} alt="Logo" width="100px" height="auto" />
          <div className={style.profile}>
                <img src={profile} alt="Profile Pic" width="30px" />
                <p>Sidharth Jain</p>
          </div>
        </div>
    )
}