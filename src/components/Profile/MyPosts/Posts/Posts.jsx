import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {

  return <div className={classes.item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSR-ltVDUoNMNDNAzwDJ4cynoWig9i6Bf-A&usqp=CAU" alt="" />
     {props.post}
    <div>
      <span>like:{props.like}</span><br/>
    </div>
  </div>
}

export default Posts;