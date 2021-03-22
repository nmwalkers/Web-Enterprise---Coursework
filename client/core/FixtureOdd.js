import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';
import { divide, method } from 'lodash';
import Dotloader from "react-spinners/DotLoader";

import '../../assets/assets-per/css/style.css';
import '../../assets/assets-per/css/bootstrap.min.css';
import '../../assets/assets-per/css/responsive.css';
import '../../assets/assets-per/css/schedule-page-responsive.css';
import IconIMG from '../../assets/images/footballicon.png';





function FixtureOdd( match ){

  useEffect(() => {
    setLoading(true);
    fetchFixtureOdd();
    
},[])

const [odds, setFixtureOdd] = useState([]);
const [loading, setLoading] = useState(false);
//false means no issue
const [isDataIssue, setDataIssue] = useState(false);




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
 console.log(fixtureOdds);

 if(fixtureOdds.api.results == 0){
    setDataIssue(true);
    //console.log("There was a data issue")
  } else {
    //  console.log("There was no issue")
    setFixtureOdd(fixtureOdds.api.odds[0].bookmakers);
    console.log(fixtureOdds.api.odds[0].bookmakers);
    setLoading(false);
  }
 
  
 

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
               <Link to="/fixtures"> <button>View other fixtures</button></Link>
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
                                                    <a href="#">
                                                        <span className="bet-price">{odd.bets[0].values[0].odd}</span>
                                                        <span className="result-for-final">
                                                        {match.match.params.home}
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="single-place-to-bet">
                                                    <a href="#">
                                                        <span className="bet-price">{odd.bets[0].values[1].odd}</span>
                                                        <span className="result-for-final">
                                                            draw
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="single-place-to-bet">
                                                    <a href="#">
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
                
                
            
                }
    
        </div>
        
        )
       }
   }

    //const classes = useStyles()
    

   export default FixtureOdd;