import React from 'react'
import background from "../img/home-background.png"

const Home = () => {

  const divStyle = {
    marginTop: -20,
    width: '100%',
    height: '650px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  };

  return(
    <div style={divStyle}>
    </div>
  )
}

export default Home