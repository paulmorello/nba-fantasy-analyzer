import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerStatsCard extends Component {

  render() {
    return (
      <div className="player-stats-card">
        <div className="player-profile-pic">
        </div>
        <div className="player-profile-info">
          <div className="player-profile-header">
            { this.props.name }, { this.props.age }, { this.props.team }
          </div>
          <div className="player-profile-stats">
            { this.props.gs },
            { this.props.gp },
            { this.props.min },
            { this.props.points },
            { this.props.assists },
            { this.props.blocks },
            { this.props.rebounds },
            { this.props.steals },
            { this.props.fg3Pct },
            { this.props.fg3m },
            { this.props.fg3a },
            { this.props.fgPct },
            { this.props.fga },
            { this.props.fgm },
            { this.props.ftPct },
            { this.props.fta },
            { this.props.ftm },
            { this.props.pf },
            { this.props.tov }
          </div>
        </div>
      </div>
    )
  }
}

  PlayerStatsCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    team: PropTypes.string,
    gs: PropTypes.number,
    gp: PropTypes.number,
    min: PropTypes.number,
    points: PropTypes.number,
    assists: PropTypes.number,
    blocks: PropTypes.number,
    rebounds: PropTypes.number,
    steals: PropTypes.number,
    fp3Pct: PropTypes.number,
    fg3m: PropTypes.number,
    fg3a: PropTypes.number,
    fgPct: PropTypes.number,
    fga: PropTypes.number,
    fgm: PropTypes.number,
    ftPct: PropTypes.number,
    fta: PropTypes.number,
    ftm: PropTypes.number,
    pf: PropTypes.number,
    tov: PropTypes.number  
  }


export default PlayerStatsCard;
