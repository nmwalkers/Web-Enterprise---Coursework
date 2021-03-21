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









    </div>
    
    )
   }

   export default Fixtures;