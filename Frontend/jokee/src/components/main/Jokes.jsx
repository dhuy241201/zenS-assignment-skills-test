import React from 'react'
import { JOKE_LIST } from '../../constants/jokes'

function Jokes({index}) {
  return (
    <div id='jokes' className='grid wide'>
      <div className="jokes__container">
        <p className="jokes__content" style={{color : index === JOKE_LIST.length-1 ? 'red' : 'gray'}}>
        {JOKE_LIST[index]}
        </p>
      </div>
    </div>
  )
}

export default Jokes