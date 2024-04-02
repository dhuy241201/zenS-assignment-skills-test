import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Header from '../components/common/Header'
import Banner from '../components/main/Banner'
import Jokes from '../components/main/Jokes'
import Vote from '../components/main/Vote'
import Footer from '../components/common/Footer'

function JokePage() {
  const [jokeIndex, setJokeIndex] = useState(0);
  const [voteList, setVoteList] = useState([]);
  const [cookie, setCookie, removeCookie] = useCookies(['vote-list'])

  useEffect(() => {
    if (cookie['vote-list']) {
      setVoteList(cookie['vote-list']);
    }
  }, [])

  useEffect(() => {
    return () => {
      const json_vote = JSON.stringify(voteList);
      setCookie('vote-list', json_vote, { path: '/' })
    }
  }, [])

  const handleChangeJokeIndex = () => {
    let index = jokeIndex + 1;
    setJokeIndex(index);
  }

  const voteManagement = {
    votes: voteList,
    setVote: setVoteList
  }

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Jokes index={jokeIndex}></Jokes>
      <Vote jokeIndex={jokeIndex} changeJokeIndex={handleChangeJokeIndex} voteManagement={voteManagement}></Vote>
      <Footer></Footer>
    </div>
  )
}

export default JokePage