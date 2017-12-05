import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {

  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this)
  }

  mouseEnter(e) {
    document.getElementById(this.props.name).classList.add("visible");
    document.getElementById(this.props.name).classList.remove("hidden");
  }

  mouseLeave(e) {
    document.getElementById(this.props.name).classList.remove("visible");
    document.getElementById(this.props.name).classList.add("hidden");
  }

  handleClick() {

    if (this.props.toGet) {
      this.props.removeGetPlayer(this.props.name)
    } else {
      this.props.removeGivePlayer(this.props.name)
    }

  }

  render() {
    return(
      <div
        className="player-container"
        onClick={ this.handleClick }
        onMouseEnter={ e => this.mouseEnter(e) }
        onMouseLeave={ e => this.mouseLeave(e) }>
        <div className="player-name">
          <span>{ this.props.name }, </span>
          <span>{ this.props.team } </span>
        </div>
        <div className="player-rating">
          { this.props.rating }
          <span id={ this.props.name } className="close-btn hidden">X</span>
        </div>
        <div className="player-stats">
          <span>FG%: { (this.props.fgPct * 100).toFixed(2) }%, </span>
          <span>Pts: { this.props.points }, </span>
          <span>Ast: { this.props.assists }, </span>
          <span>Reb: { this.props.rebounds }, </span>
          <span>Blk: { this.props.blocks }, </span>
          <span>Stl: { this.props.steals } </span>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  removeGetPlayer: PropTypes.func,
  removeGivePlayer: PropTypes.func
}

export default Player;
