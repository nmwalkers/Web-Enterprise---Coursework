import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';
import { divide, method } from 'lodash'




function Standings(){

  useEffect(() => {
    fetchStandings();
    console.log(standings, "This is in function");
},[])

const [standings, setStandings] = useState([]);

const fetchStandings = async () => {
  const standingsData = await fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/2655", {
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
        {standings.map(standing => (
          <h1 key={standing.team_id}>
           {standing.teamName}
           {standing.points}
           {standing.forme}
           {standing.goalsDiff}
           
          </h1>
          
        ))}

      </div>
    )
   }

   export default Standings;