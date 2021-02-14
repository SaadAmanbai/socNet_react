import React from 'react';
import { NavLink } from 'react-router-dom';
import Friendlist from './Friendlist/Friendlist';
import s from './Navbar.module.css';

const Navbar = (props) => {

  let friendsElements =
    props.state.friends.map (n => <Friendlist name={n.name}/>)

  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.active}>
        Profile
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink to='/messages' activeClassName={s.active}>
        Messages
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink to='/news' activeClassName={s.active}>
        News
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink to='/music' activeClassName={s.active}>
        Music
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink to='/settings' activeClassName={s.active}>
        Settings
      </NavLink>
    </div>
  <h4>Friends</h4>
    <div className={s.friends__block}>
      {friendsElements}
    </div>
  
     
  </nav>
}

export default Navbar;