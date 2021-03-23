import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';
import { divide, method } from 'lodash'
import Dotloader from "react-spinners/DotLoader";
import CountOddButton from '../../client/user/CountOddButton.js';

import '../../assets/assets-per/css/style.css';
import '../../assets/assets-per/css/bootstrap.min.css';
import '../../assets/assets-per/css/responsive.css';
import '../../assets/assets-per/css/schedule-page-responsive.css';




function Fixtures( match ){
console.log(match)
  useEffect(() => {
    setLoading(true)
    fetchFixtures();
    console.log(match)
   
},[])

const [fixtures, setFixtures] = useState([]);
const [loading, setLoading] = useState(false);
//false means no issue
const [isDataIssue, setDataIssue] = useState(false);


const fetchFixtures = async () => {
  const fixtureRawData = await fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/next/16", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "cf148989d0msh98a431f9fa2e99ep13194ajsn1b4844a71936"
    }
}) .catch((e) => {
    console.log("There was an error");
})

  const fixtureJson = await fixtureRawData.json();
  console.log(fixtureJson.api.fixtures);
  setFixtures(fixtureJson.api.fixtures);
  if(fixtureJson.api.fixtures.length < 1){
    setDataIssue(true);
  } else {
    setLoading(false);
  }
  
}

if(isDataIssue){
 return (
    
    <div className="bet-modal-bg show">
        <div className="bet-modal open">
            <div className="bet-header">
                <span className="title">There are no next fixtures currently.</span>
                <button className="cls-btn"><i className="fas fa-times"></i></button>
            </div>
            <div className="bet-body">
                
            </div>
            <div className="bet-footer">
            <Link to="/"><button>Head back</button></Link>
            </div>
        </div>
    </div>

 )
}

    //const classNamees = useStyles()
    return (
    <div>
{
    loading ? 
    <div className="preloader">
    <Dotloader 
    size={150}
    color={'red'}
    loading={loading}
    />
    <span>LOADING FIXTURES</span>
    </div>



    :


    <div className="schedule">
            <div className="container">
                <div className="row">
                {fixtures.map(fixture => (
                    <div className="col-xl-6 col-lg-6"  key = {fixture.fixture_id}>
                        <div className="single-match">
                            <div className="part-head">
                                <h5 className="match-title">{fixture.league.name}</h5>
                                <span className="match-venue">{fixture.venue}</span>
                            </div>
                            <div className="part-team">
                                <div className="single-team">
                                    <div className="logo">
                                        <img src={fixture.homeTeam.logo} alt=""/>
                                    </div>
                                    <span className="team-name">{fixture.homeTeam.team_name}</span>
                                </div>
                                <div className="match-details">
                                    <div className="match-time">
                                        <span className="date"> {fixture.event_date.charAt(8)}{fixture.event_date.charAt(9)} - {fixture.event_date.charAt(5)}{fixture.event_date.charAt(6)} -  20{fixture.event_date.charAt(2)}{fixture.event_date.charAt(3)}</span>
                                        <span className="time">{fixture.event_date.charAt(11)}{fixture.event_date.charAt(12)}:{fixture.event_date.charAt(14)}{fixture.event_date.charAt(15)}</span>
                                    </div>
                                    <span className="versase">vs</span>
                                    <div className="buttons">
                                        <a href="#"  className="buy-ticket bet-btn bet-btn-dark-light"><Link to={`/fixtures/${fixture.fixture_id}/${fixture.homeTeam.team_name}/${fixture.awayTeam.team_name}/user/${match.match.params.userId}`} >Odds Checker</Link></a>
                                       
                                    </div>
                                </div>
                                <div className="single-team">
                                    <div className="logo">
                                        <img src={fixture.awayTeam.logo} alt=""/>
                                    </div>
                                    <span className="team-name">{fixture.awayTeam.team_name}</span>
                                </div>
                            </div>

                        </div>
               
                    </div>
                    ))}

                </div>
            </div>     
        </div>        


}
   
        







    </div>
    
    )
   }

   export default Fixtures;