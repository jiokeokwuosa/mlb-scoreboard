import React from "react";
import { Link } from "react-router-dom";

const ScoreCard = props => {
	return (
		<>
            <Link onClick={props.handleClick.bind(null, props.id)} to="/">
                <div className="row box">
                    <div className="col-8">
                        <div className="row boldFont bottom-1">
                            <div className="col-6">
                                {props.status}
                            </div>
                            <div className="col-2 center">
                                    R
                            </div>
                            <div className="col-2 center">
                                    H
                            </div>
                            <div className="col-2 center">
                                    E
                            </div>
                        </div>
                        <div className={`row teamRow ${props.r_away > props.r_home? 'boldFont' :null}`}>
                            <div className="col-2">
                                <img className="team" src={require('../../assets/img/team.png')} alt='team icon'/> 
                            </div>
                            <div className="col-4">
                                <span className="name">{props.away_team}<br/><span className="name2">({props.away_wins}-{props.away_loses} Away)</span></span> 
                            </div>
                            
                            <div className="col-2 center">
                                {props.r_away}
                            </div>
                            <div className="col-2 center">
                                {props.h_away}
                            </div>
                            <div className="col-2 center">
                                {props.e_away}
                            </div>
                        </div>
                        <div className={`row teamRow ${props.r_away < props.r_home? 'boldFont' :null}`}>
                            <div className="col-2">
                                <img className="team" src={require('../../assets/img/team.png')} alt='team icon'/> 
                            </div>
                            <div className="col-4">
                                <span className="name">{props.home_team}<br/><span className="name2">({props.home_wins}-{props.home_loses} Home)</span></span> 
                            </div>
                            
                            <div className="col-2 center">
                                {props.r_home}
                            </div>
                            <div className="col-2 center">
                                {props.h_home}
                            </div>
                            <div className="col-2 center">
                                {props.e_home}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2">
                                <img className="team1" src={require('../../assets/img/player.png')} alt='team icon'/> 
                            </div>
                            <div className="col-5">
                                <span className="name">Win <br/><span className="name3">{props.winning_pitcher}</span></span> 
                            </div>
                            <div className="col-5 padOff">
                                <span className="name4">({props.winning_pitcher_wins}-{props.winning_pitcher_losses}, {props.winning_pitcher_era})</span> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <img className="team1" src={require('../../assets/img/player.png')} alt='team icon'/> 
                            </div>
                            <div className="col-5">
                                <span className="name">Loss <br/><span className="name3">{props.losing_pitcher}</span></span> 
                            </div>
                            <div className="col-5 padOff">
                                <span className="name4">({props.losing_pitcher_wins}-{props.losing_pitcher_losses}, {props.losing_pitcher_era})</span> 
                            </div>
                        </div>
                    </div>
                </div>    
            </Link>
        </>
	);
};
export default ScoreCard;