import React from 'react'

function Vote() {
  return (
    <div id='vote'>
      <div className='vote__top-line'>
        <hr className='vote__top-line-content'/>
        </div>
      <div className="vote__container">
        <div className="vote__button-group">
          <button className="vote__button btn-funny">This is Funny!</button>
          <button className="vote__button btn-not-funny">This is not funny.</button>
        </div>
      </div>
    </div>
  )
}

export default Vote