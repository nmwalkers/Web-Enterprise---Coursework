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





function FixtureOdd( match ){

  useEffect(() => {
    fetchFixtureOdd()
    
},[])

const [odds, setFixtureOdd] = useState({});

const fetchFixtureOdd = async () => {
  const fixtureRawOddsData = await fetch(`https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${match.match.params.id}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "cf148989d0msh98a431f9fa2e99ep13194ajsn1b4844a71936"
    }
})

 const fixtureOdds = await fixtureRawOddsData.json();

  setFixtureOdd(fixtureOdds.api.odds[0].bookmakers);
  console.log(fixtureOdds);
}



    //const classes = useStyles()
    return (
    <div>
          <div class="betting-table">
            <div class="row">
            <div class="col-xl-10 col-lg-10">
            {odds.map(odd => (
                            <div class="tab-content bet-tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="all-sports" role="tabpanel" aria-labelledby="all-sports-tab">
                                    <div class="sports-list">
                                        <h4 class="title">{match.match.params.home} VS {match.match.params.away}</h4>
                                      
                                        <div class="single-sport-box">
                                        <div class="part-icon">
                                            <i class="flaticon-football"></i>
                                        </div>
                                        <div class="part-team">
                                            <ul>
                                                <h3>{odd.bookmaker_name}</h3>
                                            </ul>
                                        </div>
                                        <div class="part-match">
                                            <div class="single-place-to-bet">
                                                <a href="#">
                                                    <span class="bet-price">{odd.bets[0].values[0].odd}</span>
                                                    <span class="result-for-final">
                                                    {match.match.params.home}
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="single-place-to-bet">
                                                <a href="#">
                                                    <span class="bet-price">{odd.bets[0].values[1].odd}</span>
                                                    <span class="result-for-final">
                                                        draw
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="single-place-to-bet">
                                                <a href="#">
                                                    <span class="bet-price">{odd.bets[0].values[2].odd}</span>
                                                    <span class="result-for-final">
                                                    {match.match.params.away}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
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

   export default FixtureOdd;