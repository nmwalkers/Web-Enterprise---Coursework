import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { divide, method } from 'lodash';
import Dotloader from "react-spinners/DotLoader";
import auth from './../auth/auth-helper'
import {read, update} from '../../client/user/api-user.js'
import {Redirect, Link} from 'react-router-dom';
import '../../assets/assets-per/css/style.css';
import '../../assets/assets-per/css/bootstrap.min.css';
import '../../assets/assets-per/css/responsive.css';
import '../../assets/assets-per/css/schedule-page-responsive.css';
import IconIMG from '../../assets/images/footballicon.png';









 function FixtureOdd( match ) {

console.log(match);

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    country: '',
    favourite_team :'',
    open: false,
    sex: '',
    user_role: false,
    betting_winner: 0,
    betting_draw: 0,
    betting_lose: 0,
    error: ''
  })
  const jwt = auth.isAuthenticated()



  useEffect(() => {

    
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
        console.log("Eror")
        abortController.abort()
        ;
      } else {
        setValues({...values, name: data.name, email: data.email, betting_winner: data.betting_winner, betting_draw: data.betting_draw, betting_lose: data.betting_lose})
        console.log("Okay")
      }


      console.log("left read")
    })

   
    
    setLoading(true);
    fetchFixtureOdd();

    return function cleanup(){
      abortController.abort()
    }


},[match.match.params.userId])



const user = {
  name: values.name || undefined,
  email: values.email || undefined,
  country: values.country || undefined,
  sex: values.sex || undefined,
  favourite_team: values.favourite_team || undefined,
  password: values.password || undefined,
  user_role: values.user_role,
  betting_winner: values.betting_winner,
  betting_draw: values.betting_draw,
  betting_lose: values.betting_lose
}

function updateTheButton(param){



  update({
    userId: match.match.params.userId
    }, {
    t: jwt.token
    }, user).then((data) => {
    if (data && data.error) {
      setValues({...values, error: data.error})
    } else if(param == 1) {
      var count = data.betting_winner;
      count = count + 1;
      user.betting_winner = count;
      console.log(count);
      setValues({...values, userId: data._id, betting_winner: count})
      console.log("Success")
    }  else if(param == 2) {
      var count = data.betting_draw;
      count = count + 1;
      user.betting_draw = count;
      console.log(count);
      setValues({...values, userId: data._id, betting_draw: count})
      console.log("Success")
    } else if(param == 3) {
      var count = data.betting_lose;
      count = count + 1;
      user.betting_lose = count;
      console.log(count);
      setValues({...values, userId: data._id, betting_lose: count})
      console.log("Success")
    } 
    
    })

}



const [odds, setFixtureOdd] = useState([]); 
const [loading, setLoading] = useState(false);
//false means no issue
const [isDataIssue, setDataIssue] = useState(false);
const [buttonPopup, setButtonPopup] = useState(false);

//getting bet button data



const fetchFixtureOdd = async () => {
  const fixtureRawOddsData = await fetch(`https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${match.match.params.id}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "cf148989d0msh98a431f9fa2e99ep13194ajsn1b4844a71936"
       
    }
    

    
}) .catch((e) => {
    console.log("There was an error");
    setDataIssue(true);
})

 const fixtureOdds = await fixtureRawOddsData.json();
 //console.log(fixtureOdds);

 if(fixtureOdds.api.results == 0){
    setDataIssue(true);
    //console.log("There was a data issue")
  } else {
    //  console.log("There was no issue")
    setFixtureOdd(fixtureOdds.api.odds[0].bookmakers);
    //console.log(fixtureOdds.api.odds[0].bookmakers);
    setLoading(false);
  }
 
  
  console.log(match, "This is match data", match.match.params.home)

}






if(isDataIssue){
    return (
       
       <div className="bet-modal-bg show">
           <div className="bet-modal open">
               <div className="bet-header">
                   <span className="title">There are no Odds for {match.match.params.home} VS {match.match.params.away} yet! Please check Back later.</span>
                   <button className="cls-btn"><i className="fas fa-times"></i></button>
               </div>
               <div className="bet-body">
                   
               </div>
               <div className="bet-footer">
               <Link to={`/fixtures/user/${match.match.params.userId}`}> <button>View other fixtures</button></Link>
               </div>
           </div>
       </div>
   
    )
   } else {
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
        <span>LOADING ODDS</span>
        
        </div>
    
    
    
        :
    
        <div>
              <div className="betting-table">
                <div className="row">
                <div className="col-xl-10 col-lg-10">
                {odds.map(odd => (
                    
                                <div className="tab-content bet-tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="all-sports" role="tabpanel" aria-labelledby="all-sports-tab">
                                        <div className="sports-list">
                                            <h4 className="title">{match.match.params.home} VS {match.match.params.away}</h4>
                                          
                                            <div className="single-sport-box">
                                            <div className="part-icon">
                                            <img src={IconIMG} alt="Logo" />
                                            </div>
                                            <div className="part-team">
                                                <ul>
                                                    <h4>{odd.bookmaker_name}</h4>
                                                </ul>
                                            </div>
                                            <div className="part-match">
                                                <div className="single-place-to-bet">
                                                    <a href="#" onClick={() => updateTheButton(1)} >
                                                   
                                                   
                                                      
                                                        <span className="bet-price">{odd.bets[0].values[0].odd}</span>
                                                        <span className="result-for-final">
                                                        {match.match.params.home}
                                                        </span>
                                                       
                                                    </a>
                                                   
                                                </div>
                                                <div className="single-place-to-bet">
                                                    <a   href="#"  onClick={() => updateTheButton(2)}>
                                                        <span className="bet-price">{odd.bets[0].values[1].odd}</span>
                                                        <span className="result-for-final">
                                                            draw
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="single-place-to-bet">
                                                <a   href="#"  onClick={() => updateTheButton(3)}>
                                                        <span className="bet-price">{odd.bets[0].values[2].odd}</span>
                                                        <span className="result-for-final">
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
            
                }
    
        </div>
        
        )
       }
   }

    //const classes = useStyles()
    

   export default FixtureOdd;