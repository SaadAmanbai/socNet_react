import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return <div>
    <div className={s.content}>
      <img src='https://propostuplenie.ru/website/navigator/var/custom/file/gbp-h.jpg' />  
    </div>
    
    <div className={s.descriptionBlock}>
      ava+description
    </div>
  </div>
}

export default ProfileInfo;