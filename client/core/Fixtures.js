import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';
import { divide, method } from 'lodash'

import '../../assets/assets-per/css/style.css';
import '../../assets/assets-per/css/bootstrap.min.css';
import '../../assets/assets-per/css/responsive.css';
import '../../assets/assets-per/css/schedule-page-responsive.css';





function Fixtures(){

  useEffect(() => {
    fetchFixtures();
},[])

const [fixtures, setFixtures] = useState([]);

const fetchFixtures = async () => {
  const fixtureRawData = await fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/next/16", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "cf148989d0msh98a431f9fa2e99ep13194ajsn1b4844a71936"
    }
})

  const fixtureJson = await fixtureRawData.json();
  console.log(fixtureJson.api.fixtures);
  setFixtures(fixtureJson.api.fixtures);
}



    //const classes = useStyles()
    return (
    <div>
   
        <div class="schedule">
            <div class="container">
                <div class="row">
                
                {fixtures.map(fixture => (
                    <div class="col-xl-6 col-lg-6"  key = {fixture.fixture_id}>
                        <div class="single-match">
                            <div class="part-head">
                                <h5 class="match-title">{fixture.league.name}</h5>
                                <span class="match-venue">{fixture.venue}</span>
                            </div>
                            <div class="part-team">
                                <div class="single-team">
                                    <div class="logo">
                                        <img src={fixture.homeTeam.logo} alt=""/>
                                    </div>
                                    <span class="team-name">{fixture.homeTeam.team_name}</span>
                                </div>
                                <div class="match-details">
                                    <div class="match-time">
                                        <span class="date"> {fixture.event_date.charAt(8)}{fixture.event_date.charAt(9)} - {fixture.event_date.charAt(5)}{fixture.event_date.charAt(6)} -  20{fixture.event_date.charAt(2)}{fixture.event_date.charAt(3)}</span>
                                        <span class="time">{fixture.event_date.charAt(11)}{fixture.event_date.charAt(12)}:{fixture.event_date.charAt(14)}{fixture.event_date.charAt(15)}</span>
                                    </div>
                                    <span class="versase">vs</span>
                                    <div class="buttons">
                                        <a href="#" class="buy-ticket bet-btn bet-btn-dark-light">buy ticket</a>
                                    </div>
                                </div>
                                <div class="single-team">
                                    <div class="logo">
                                        <img src={fixture.awayTeam.logo} alt=""/>
                                    </div>
                                    <span class="team-name">{fixture.awayTeam.team_name}</span>
                                </div>
                            </div>

                        </div>
               
                    </div>
                    ))}

                </div>
            </div>     
        </div>        








    </div>
    
    )
   }

   export default Fixtures;