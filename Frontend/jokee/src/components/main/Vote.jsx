import React from 'react'

function Vote({jokeIndex,changeJokeIndex,voteManagement}) {

  const handleVoteFunny = () => {
    changeJokeIndex();
    let listVote = voteManagement.votes
    listVote.push(1);
    voteManagement.setVote(listVote)
  }

  const handleVoteNotFunny = () => {
    changeJokeIndex();
    let listVote = voteManagement.votes
    listVote.push(0);
    voteManagement.setVote(listVote)
  }


  return (
    <div id='vote'>
      <div className='vote__top-line'>
        <hr className='vote__top-line-content'/>
        </div>
      <div className="vote__container">
        <div className="vote__button-group" disabled={jokeIndex>=4 ? 'true': 'false' }>
          <button className="vote__button btn-funny"
          onClick={handleVoteFunny}
          disabled={jokeIndex >= 4}
          style={{ backgroundColor:jokeIndex >= 4 ? "grey" : {}}}
          >This is Funny!</button>
          <button className="vote__button btn-not-funny"
          onClick={handleVoteNotFunny}
          disabled={jokeIndex >= 4}
          style={{ backgroundColor:jokeIndex >= 4 ? "grey" : {}}}
          >This is not funny.</button>
        </div>
      </div>
    </div>
  )
}

export default Vote