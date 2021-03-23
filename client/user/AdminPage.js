import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {read} from './api-user.js'
import {list} from './api-user.js'

import '../../assets/assets-per/css/style.css';
import '../../assets/assets-per/css/bootstrap.min.css';
import '../../assets/assets-per/css/responsive.css';
import '../../assets/assets-per/css/dashboard-responsive.css';



   export default function AdminPage( match){

    const [users, setUsers] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error, "ERROR")
            } else {
                setUsers(data)
                console.log(data);
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])

   
  
// Total Users, Male Female Other
// Option 1, 2, 3 
    

    
    
    
    return (
 <div>
        <div className="player-statics">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="user-panel-title">
                                <h3>User Statics</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/money1.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$584.00</span>
                                    <span className="title">Available Balance</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/payment.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$464.00</span>
                                    <span className="title">Total Payout</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/money2.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$24k.00</span>
                                    <span className="title">Deposits Total</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/hourglass.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$242.00</span>
                                    <span className="title">Pending Amount</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/profits.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$465.00</span>
                                    <span className="title">Interest Earn</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/cash.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$158.00</span>
                                    <span className="title">Your Total Earings</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/profit.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$814.00</span>
                                    <span className="title">Referral Earings</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                <div className="part-icon">
                                    <img src="../assets/assets-per/img/svg/transfer1.svg" alt=""/>
                                </div>
                                <div className="part-text">
                                    <span className="number">$534.00</span>
                                    <span className="title">Fund Transfer</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

                                     


               <div className="payment-history">
                   <div className="container">
                       <div className="row">
                           <div className="col-xl-8 col-lg-8">
                               <div className="user-panel-title">
                                   <h3>User Countries</h3>
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-xl-12 col-lg-12">
                               <div className="transaction-area">
                                   <table className="table">
                                   <thead>
                                        <tr>
                                            <th scope="col">Country</th>
                                            <th scope="col"> </th>
                                            <th scope="col"> </th>
                                            <th scope="col"> </th>
                                            <th scope="col">User Count</th>
                                        </tr>
                                    </thead>
                                  
                                    <tbody>
                                    {users.map(countries => (
                                        <tr>
                                          <th scope="row" className="d-flex">{countries.country}</th>
                                          <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>1</td>
                                      </tr>


                                   
                                    ))}
                                     </tbody>
                                     </table>


                               </div>
                           </div>
                       </div>



                   </div>
               </div>






           </div>
       )
   }