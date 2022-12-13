import React from 'react'
import "../css/home.css"
import artist from "../img/home-background.jpg"

function Home() {



  return (
    <div className='content'>
      <h1>Art made by real Artist!</h1>
      <div className='artist_container'>
        <img className='artist_image' src={artist}></img>
      </div>
    </div>
  )
}

export default Home