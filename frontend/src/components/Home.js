import React from 'react'
import background from "../img/home-background.png"

const Home = () => {

  const divStyle = {
    marginTop: -20,
    width: '100vw',
    height: '65vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  };

  return(
    <div style={divStyle}>
    </div>
  )
}

export default Home