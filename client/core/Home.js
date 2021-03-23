import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import '../../assets/assets-per/css/style.css';
import '../../assets/assets-per/css/bootstrap.min.css';
import '../../assets/assets-per/css/responsive.css';


import myImg from '../../assets/images/grass-bg.jpg'



   export default function Home(){

    return (

        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <div className="row justify-content-xl-start justify-content-lg-center justify-content-md-center">
                        <div className="col-xl-7 col-lg-11 col-md-10 col-12 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="text-content">
                                <h1>Compare the Best Odds on up and coming games</h1>
                                <h4>Many of your favourite betting partners</h4>
                                <p>We're football fanatics and inside our platform you won't be dissapointed. Sign in to compare bets from companies such as Bet365, William Hill and many more!</p>
                                <div className="banner-button">
                                    <ul>
                                        <li>
                                            <a href="/signup" className="bet-btn bet-btn-base">Sign up</a>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
   }
   