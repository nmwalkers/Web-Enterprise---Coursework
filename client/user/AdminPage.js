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
    const [totalUser, setTotalUsers] = useState(0);
    const [totalMale, setTotalMale ] = useState(0);
    const [totalFemale, setTotalFemale] = useState(0);
    const [totalOther, setTotalOther] = useState(0);
    const [totalWinning, setTotalWinning] = useState(0);
    const [totalDraw, setTotalDraw] = useState(0);
    const [totalLose, setTotalLose] = useState(0);

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
    

const getTotalUsers = async () => {

    setTotalUsers(users.length);



}




function renderTotalAdmins(){
    const buttonList = [];
    var total = 0;
    

    for (let i =0; i < users.length; i++ ){
       if(users[i].user_role == true){
        total++;
       }
    
       
    }
    

    
    return total;
}

function renderWinnerButton(){
    const buttonList = [];
    var total = 0;

    for (let i =0; i < users.length; i++ ){
       total = total + users[i].betting_winner;
    
       
    }

    
    return total;
}
    

    function renderDrawButton(){
        const buttonList = [];
        var total = 0;
    
        for (let i =0; i < users.length; i++ ){
           total = total + users[i].betting_draw;
        
           
        }
    
        
        return total;
        
    }



function renderAwayButton(){
    const buttonList = [];
    var total = 0;

    for (let i =0; i < users.length; i++ ){
       total = total + users[i].betting_lose;
    
       
    }

    
    return total;
    
}



    
function renderUserMales(){
const maleList = [];
const totalNumber = 0;
for (let i =0; i < users.length; i++ ){
if(users[i].sex == "male"){
   maleList.push(users[i].sex)
}


} return maleList.length;

}

function renderUserFemales(){
    const femaleList = [];
    const totalNumber = 0;
    for (let i =0; i < users.length; i++ ){
    if(users[i].sex == "female"){
       femaleList.push(users[i].sex)
    }
    console.log(femaleList.length)
    
    } return femaleList.length;
    
    }

    function renderOtherUsers(){
        const otherUserList = [];
        const totalNumber = 0;
        for (let i =0; i < users.length; i++ ){
        if(users[i].sex == "female"){
           otherUserList.push(users[i].sex)
        }
        console.log(otherUserList.length)
        
        } return otherUserList.length;
        
        }

function renderTotalUsers(){
    return users.length;
}

    
    
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
                                
                                <div className="part-text">
                                    <span className="number">{renderTotalUsers()}</span>
                                    <span className="title">Total Users</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                               
                                <div className="part-text">
                                    <span className="number">{renderUserMales()}</span>
                                    <span className="title">Total Male</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                
                                <div className="part-text">
                                    <span className="number">{renderUserFemales()}</span>
                                    <span className="title">Total Female</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                               
                                <div className="part-text">
                                    <span className="number">{renderOtherUsers()}</span>
                                    <span className="title">Total Other</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                               
                                <div className="part-text">
                                    <span className="number">{renderWinnerButton()}</span>
                                    <span className="title">Total Home Button Clicks</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                
                                <div className="part-text">
                                    <span className="number">{renderDrawButton()}</span>
                                    <span className="title">Total Draw Button Clicks</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                
                                <div className="part-text">
                                    <span className="number">{renderAwayButton()}</span>
                                    <span className="title">Total Away Button Clicks</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-static">
                                
                                <div className="part-text">
                                    <span className="number">{renderTotalAdmins()}</span>
                                    <span className="title">Total Admins</span>
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