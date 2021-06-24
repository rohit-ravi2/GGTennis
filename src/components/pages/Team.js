import React from 'react';
import '../../App.css';
export default function Product() {
  return (
    <>
      <h1 id="teamTitle">Meet The Team</h1>
      <div className="containerTeam">
      <div className="wrapperTeam">
        <img src='images/justinpic.JPG' alt='Justin Gerstl - GG Tennis Academy' id="justinTeamImg"></img>
        <div className="textTeam">
          <h2>Justin Gerstl</h2>
          <h3>Head Pro</h3>
          <p>Justin Gerstl is a former division one college player from Upper Saddle River, New Jersey. He has been teaching tennis for 13 years working with players from the high school varsity level through blue chip level.
          As a player Justin competed in USTA from when he was 10 through after college at futures and prize money tournaments. He has been through the process all advanced players in this area go through with competing, getting recruited, developing, and even seeing sports psychologists to better his mental approach to the game.
          Being around the sport for so long has helped Justin become the coach he is today and aids in him bringing a relevant and modern approach to his teachings.</p>
        </div>
      </div>
      <div className="wrapperTeam">
        <img src='images/luke.JPG' alt='Luke Granger - GG Tennis Academy' id="justinTeamImg"></img>
        <div className="textTeam">
          <h2>Luke Granger</h2>
          <h3>Head Pro</h3>
          <p>Luke Granger has had a passion for tennis his entire life.
            As a junior, Luke grew up competing in USTA and high school, developing into one of the top players in Bergen County. Playing for Northern Highlands High School, he won several awards including Bergen County Player of the Year, a county championship at first singles, and a New Jersey State Sectional Championship. 
            Luke went on to play number one singles at Skidmore College, a top 20 ranked team in Division III, making NCAA's all four years he attended. After college, Luke played on the Futures tour and in multiple prize money tournaments.
            With 10+ years of work coaching ranked juniors in addition to his experience as a player, Luke brings proven technique and enthusiam to his teaching philosophy.</p>
        </div>
      </div>
      </div>
    </>

  );
}
