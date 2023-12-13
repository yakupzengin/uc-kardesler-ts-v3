import React from 'react';
import "./pagesHead.css"
const PagesHead = (props) => {
  return (
    <div className='head-container'>
      <h2 className='title'>{props.title}</h2>
      <div className='breadcrumb'>
        <a href="./" title='Anasayfa' className='breadcrumb-link'>Anasayfa</a>
        <span className='breadcrumb-separator'> / </span>
        <a href="./hakkımızda" title='Anasayfa' className='breadcrumb-link'>{props.title}</a>
      </div>
    </div>
  )
}

export default PagesHead;
