import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { inputChange, getScores } from './../../redux/actions/authActions';
import Header from './../includes/header.component';
import ScoreBox from './../includes/scorecard.component';
import "./css/desktopStyle.css";

const Home = props => {
    const mounted = useRef(); 
    useEffect(()=>{
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
            window.scrollTo(0, 0); 
        } else {
            // do componentDidUpdate logic          
          } 	       
    }) 

    const handleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const newYear = 'year_'+value.substr(0, 4);
        const newMonth = 'month_'+value.substr(5, 2);
        const newDay = 'day_'+value.substr(8, 2);
        props.getScores(newYear, newMonth, newDay);
    }
   
    const {             
        scores,
        day,
        month,
        year,
        mainNav,
        mainNav1,
        key1       
    } = props; 

    const handleClick = (buttonStatus, e) =>{
        e.preventDefault();
        const newYear = 'year_'+year
        const newMonth = 'month_'+month
        let newDay = null
        if(buttonStatus === 'prev'){
            newDay = 'day_'+ (day-1)
        }else{
            newDay = 'day_'+ (+day+1)         
        }
        props.getScores(newYear, newMonth, newDay);
    }

    const handleNavigation = (key1, e) =>{
        e.preventDefault();
        props.inputChange('mainNav','details');
        props.inputChange('key1', key1);

    }

    const handleNavigation1 = (key, e) =>{
        e.preventDefault();
        props.inputChange('mainNav1', key);
    }

    const handleBackNavigation = (e) =>{
        e.preventDefault();
        props.inputChange('mainNav', 'home');
    }

    const scoreList = () => { 
        if(scores.status){
            return <ScoreBox
            handleClick={handleNavigation}
            id={-1}
            status ={scores.status.status}
            away_team={scores.away_team_name}
            home_team={scores.home_team_name}
            away_wins={scores.away_win}
            away_loses={scores.away_loss}
            home_wins={scores.home_win}
            home_loses={scores.home_loss}
            r_home={scores.linescore.r.home}
            r_away={scores.linescore.r.away}
            h_home={scores.linescore.h.home}
            h_away={scores.linescore.h.away}
            e_home={scores.linescore.e.home}
            e_away={scores.linescore.e.away}
            winning_pitcher={scores.winning_pitcher.name_display_roster}
            winning_pitcher_wins={scores.winning_pitcher.wins}
            winning_pitcher_losses={scores.winning_pitcher.losses}
            winning_pitcher_era={scores.winning_pitcher.era}
            losing_pitcher={scores.losing_pitcher.name_display_roster}
            losing_pitcher_wins={scores.losing_pitcher.wins}
            losing_pitcher_losses={scores.losing_pitcher.losses}
            losing_pitcher_era={scores.losing_pitcher.era}
        />         
        }else if(scores.length){
            return scores.map((score, index) => {            
                return <ScoreBox
                handleClick={handleNavigation}
                key={index}
                id={index}
                status ={score.status.status}
                away_team={score.away_team_name}
                home_team={score.home_team_name}
                away_wins={score.away_win}
                away_loses={score.away_loss}
                home_wins={score.home_win}
                home_loses={score.home_loss}
                r_home={score.linescore.r.home}
                r_away={score.linescore.r.away}
                h_home={score.linescore.h.home}
                h_away={score.linescore.h.away}
                e_home={score.linescore.e.home}
                e_away={score.linescore.e.away}
                winning_pitcher={score.winning_pitcher.name_display_roster}
                winning_pitcher_wins={score.winning_pitcher.wins}
                winning_pitcher_losses={score.winning_pitcher.losses}
                winning_pitcher_era={score.winning_pitcher.era}
                losing_pitcher={score.losing_pitcher.name_display_roster}
                losing_pitcher_wins={score.losing_pitcher.wins}
                losing_pitcher_losses={score.losing_pitcher.losses}
                losing_pitcher_era={score.losing_pitcher.era}
            />             
            })
        }else{
           return <h5 className="myFloat">No games today</h5>
        }
		
	} 
	return (        
		<>        
            <Header/>    
            <div className="container" id="homepage">
                <div className="row row1">
                    <div className="col-2"> </div>
                    <div className="col-8">
                        {mainNav === 'home'?
                         <>
                            <div className="row">
                                <div className="col-6">
                                    <h5> Scores for {day}-{month}-{year}</h5>
                                </div>
                                <div className="col-6 floatRight right">
                                    <button onClick={handleClick.bind(null,'prev')}  >Prev</button> <input type="date" name="date" onChangeCapture={handleChange}/> <button onClick={handleClick.bind(null,'next')}>Next</button>
                                </div>
                            </div>
                            {scoreList()}
                         </>
                        : 
                        <>
                            <div className="row">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="boldFont">
                                            <td> &nbsp; </td>
                                            <td> 1 </td>
                                            <td> 2 </td>
                                            <td> 3 </td>
                                            <td> 4 </td>
                                            <td> 5 </td>
                                            <td> 6 </td>
                                            <td> 7 </td>
                                            <td> 8 </td>
                                            <td> 9 </td>
                                            <td> R </td>
                                            <td> H </td>
                                            <td> E </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {scores.length>0? scores[`${+key1}`].away_team_name: scores.status? scores.away_team_name :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[0].away: scores.status? scores.linescore.inning[0].away :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[1].away: scores.status? scores.linescore.inning[1].away:null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[2].away: scores.status? scores.linescore.inning[2].away :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[3].away: scores.status? scores.linescore.inning[3].away :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[4].away: scores.status? scores.linescore.inning[4].away :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[5].away: scores.status? scores.linescore.inning[5].away :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[6].away: scores.status? scores.linescore.inning[6].away :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[7].away: scores.status? scores.linescore.inning[7].away :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[8].away: scores.status? scores.linescore.inning[8].away :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.r.away: scores.status? scores.linescore.r.away :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.h.away: scores.status? scores.linescore.h.away :null}  </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.e.away: scores.status? scores.linescore.e.away :null}  </td>
                                        </tr>
                                        <tr>
                                            <td> {scores.length>0? scores[`${+key1}`].home_team_name: scores.status? scores.home_team_name :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[0].home: scores.status? scores.linescore.inning[0].home :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[1].home: scores.status? scores.linescore.inning[1].home :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[2].home: scores.status? scores.linescore.inning[2].home :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[3].home: scores.status? scores.linescore.inning[3].home :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[4].home: scores.status? scores.linescore.inning[4].home :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[5].home: scores.status? scores.linescore.inning[5].home :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[6].home: scores.status? scores.linescore.inning[6].home :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[7].home: scores.status? scores.linescore.inning[7].home :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.inning[8].home: scores.status? scores.linescore.inning[8].home :null}</td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.r.home: scores.status? scores.linescore.r.home :null} </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.h.home: scores.status? scores.linescore.h.home :null}  </td>
                                            <td> {scores.length>0? scores[`${+key1}`].linescore.e.home: scores.status? scores.linescore.e.home :null}  </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ul>
                                        <li className={`${mainNav1 === 'partOne'? 'boldFont' :null}`}><Link onClick={handleNavigation1.bind(null,'partOne')}>{scores.length>0? scores[`${+key1}`].away_team_name: scores.status? scores.away_team_name :null} </Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li className={`${mainNav1 === 'partTwo'? 'boldFont' :null}`}><Link onClick={handleNavigation1.bind(null,'partTwo')}>{scores.length>0? scores[`${+key1}`].home_team_name: scores.status? scores.home_team_name :null} </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                {mainNav1 === 'partOne'?
                                <table className="table table-bordered myTable">
                                    <thead>
                                        <tr className="boldFont">
                                            <td> Name </td>
                                            <td> AB </td>
                                            <td> RH </td>
                                            <td> RBI </td>
                                            <td> BB </td>
                                            <td> SO </td>
                                            <td> AVG </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Emeka</td>
                                            <td> 1 </td>
                                            <td> 2 </td>
                                            <td> 3 </td>
                                            <td> 4 </td>
                                            <td> 5 </td>
                                            <td> 6 </td>
                                        </tr>
                                        <tr>
                                            <td>Micheal</td>
                                            <td> 1 </td>
                                            <td> 2 </td>
                                            <td> 3 </td>
                                            <td> 4 </td>
                                            <td> 5 </td>
                                            <td> 6 </td>
                                        </tr>
                                        <tr>
                                            <td>Kate</td>
                                            <td> 1 </td>
                                            <td> 2 </td>
                                            <td> 3 </td>
                                            <td> 4 </td>
                                            <td> 5 </td>
                                            <td> 6 </td>
                                        </tr>
                                    </tbody>
                                </table>
                                :
                                <table className="table table-bordered myTable">
                                    <thead>
                                        <tr className="boldFont">
                                            <td> Name </td>
                                            <td> AB </td>
                                            <td> RH </td>
                                            <td> RBI </td>
                                            <td> BB </td>
                                            <td> SO </td>
                                            <td> AVG </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John</td>
                                            <td> 1 </td>
                                            <td> 2 </td>
                                            <td> 3 </td>
                                            <td> 4 </td>
                                            <td> 5 </td>
                                            <td> 6 </td>
                                        </tr>
                                        <tr>
                                            <td>Okey</td>
                                            <td> 1 </td>
                                            <td> 2 </td>
                                            <td> 3 </td>
                                            <td> 4 </td>
                                            <td> 5 </td>
                                            <td> 6 </td>
                                        </tr>
                                        <tr>
                                            <td>Micheal</td>
                                            <td> 1 </td>
                                            <td> 2 </td>
                                            <td> 3 </td>
                                            <td> 4 </td>
                                            <td> 5 </td>
                                            <td> 6 </td>
                                        </tr>
                                    </tbody>
                                </table>
                                }
                                <Link className="active1" onClick={handleBackNavigation}>Go back to list</Link>
                            </div>
                        </>}
                           
                    </div>
                    <div className="col-2"> </div>
                </div>
            </div>
        </>
	);
};
Home.propTypes= {   
    inputChange: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    scores: state.auth.scores,
    day: state.auth.day,
    month: state.auth.month,
    year: state.auth.year,
    date: state.auth.date,
    mainNav: state.auth.mainNav,
    mainNav1: state.auth.mainNav1,
    key1: state.auth.key1
})
export default connect(mapStateToProps, {inputChange, getScores})(Home);
