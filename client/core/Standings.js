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
  setStandings(standingsDataa.api.standings[0]);
}



    //const classes = useStyles()
    return (
      <div>
        <div className="standing">
          <div className="container">
            <div className="standing-list-cover">
              <div className="standing-team-list">
                <h4 className="result-title">Premiership Standings</h4>
                <table className="table">
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
                                                              <tr key={standing.id}>
                                                                <th scope="row">{standing.rank}</th>
                                                                <td>
                                                                    <span className="single-team">
                                                                        <span key={standing.id} className="logo">
                                                                            <img src={standing.logo} /> 
                                                                        </span>
                                                                        <span className="text">
                                                                           {standing.teamName}
                                                                        </span>
                                                                    </span>
                                                                   
                                                                </td>
                                                                <td key={standing.id}>{standing.all.win}</td>
                                                                <td key={standing.id}>{standing.all.lose}</td>
                                                                <td key={standing.id}>{standing.all.draw}</td>
                                                                <td key={standing.id}>{standing.points}</td>
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