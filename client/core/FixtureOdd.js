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
    fetchFixtureOdd();
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
  console.log(fixtureOdds.api.odds[0].bookmakers);
}



    //const classes = useStyles()
    return (
    <div>
<h1>Hello</h1>

    </div>
    
    )
   }

   export default FixtureOdd;