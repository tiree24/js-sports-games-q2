import React, {Component} from 'react';


class Team extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        shots: 0,
        score: 0 
      }
    this.shotSound = new Audio('Swish+2.mp3')
    this.scoreSound = new Audio('voorheez3.mp3')
    }
    
    shotHandler = () => {
      let score = this.state.score
    this.shotSound.play()
    
      if (Math.random() > 0.5) {
        score += 1;
    
        
          this.scoreSound.play()
        
       
      }
    
      this.setState((state, props) => ({
        shots: state.shots + 1,
        score
      }))
    }
    
    
      render() {
        let shotPercentageDiv
    
        if(this.state.shots){
         const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
          shotPercentageDiv = (
    <div>
    
    <strong>shooting %: {shotPercentage}</strong>
    </div>
          )
        } 
    
        return (
          <div className="Team">
            <h2>{this.props.name}</h2>
            
    
    <div className="team">
    < img src={this.props.logo} alt={this.props.name} />
    </div>
    
    
    
    <div>
      <strong>Shots:</strong>{this.state.shots}
    </div>
    <div><strong>Score:</strong>{this.state.score}
    </div>
    
    {shotPercentageDiv}
    
    <button onClick={this.shotHandler}>Shoot</button>
    </div>
            
        )
      }
    
    }
    
    
export default Team;