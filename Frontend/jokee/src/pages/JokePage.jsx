import React from 'react'
import Header from '../components/common/Header'
import Banner from '../components/main/Banner'
import Jokes from '../components/main/Jokes'
import Vote from '../components/main/Vote'
import Footer from '../components/common/Footer'
import '../css/main.css'

function JokePage() {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Jokes></Jokes>
        <Vote></Vote>
        <Footer></Footer>
    </div>
  )
}

export default JokePage