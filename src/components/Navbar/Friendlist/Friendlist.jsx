import React from 'react';
import s from './Friendlist.module.css';

const Friendlist = (props) => {
  return (
    <div className={s.friends__block}> 
      <div className={s.friends}>
        <img className={s.friends__ava} src="https://pbs.twimg.com/profile_images/1009469376490192896/hW_ZFLHm.jpg" alt="hui"/>
        <span className={s.friends__name}>
          {props.name}
        </span>
      </div>
    </div>

  );}

export default Friendlist;