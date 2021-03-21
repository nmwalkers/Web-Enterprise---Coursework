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





function Standings(){

  useEffect(() => {
    fetchStandings();
    console.log(standings, "This is in function");
},[])

const [standings, setStandings] = useState([]);

const fetchStandings = async () => {
  const standingsData = await fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "cf148989d0msh98a431f9fa2e99ep13194ajsn1b4844a71936"
    }
})
  const standingsDataa = await standingsData.json();
  console.log(standingsDataa.api.standings[0]);
  setStandings(standingsDataa.api.standings[0]);
}



    //const classes = useStyles()
    return (
      <div>
        <div class="standing">
          <div class="container">
            <div class="standing-list-cover">
              <div class="standing-team-list">
                <h4 class="result-title">Premiership Standings</h4>
                <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Pos</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">D</th>
                                    <th scope="col">pts</th>
                                </tr>
                            </thead>
                              <tbody>
                              {standings.map(standing => (
                                                              <tr>
                                                                <th scope="row">{standing.rank}</th>
                                                                <td>
                                                                    <span class="single-team">
                                                                        <span class="logo">
                                                                            <img src={standing.logo} /> 
                                                                        </span>
                                                                        <span class="text">
                                                                           {standing.teamName}
                                                                        </span>
                                                                    </span>
                                                                   
                                                                </td>
                                                                <td>{standing.all.win}</td>
                                                                <td>{standing.all.lose}</td>
                                                                <td>{standing.all.draw}</td>
                                                                <td>{standing.points}</td>
                                                            </tr>

          
                              ))}

                             </tbody>
                  </table>

            </div>
          </div>
        </div>
      </div>    
      </div>
    )
   }

   export default Standings;