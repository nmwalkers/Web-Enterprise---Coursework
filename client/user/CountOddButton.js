import React, {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import auth from './../auth/auth-helper'
import {read, update} from './api-user.js'

export default function CountOddButton({userIdd, params}) {
    

 
  const [buttonCountWinner, setButtonCountWinner] = useState(null);
  const [buttonCountDraw, setButtonCountDraw] = useState(null);
  const [buttonCountLose, setButtonCountLose] = useState(null);
  const [userID, setUserId] = useState(null);
  setUserId(userIdd);

  console.log("We are on pal")
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
      userId: userID
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, name: data.name, email: data.email, betting_winner: data.betting_winner, betting_draw: data.betting_draw, betting_lose: data.betting_lose})
      }
    })
    return function cleanup(){
      abortController.abort()
    }


    
  }, [userID])





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

    update({
      userId: userIdd
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else if(params = 1) {
        let count = data.betting_winner;
        count = count + 1;
        setValues({...values, userId: data._id, betting_winner: count, betting_draw: data.betting_draw, betting_lose: data.betting_lose})
      }
    })




   
  


   

   
    
    

}
CountOddButton.propTypes = {
    userId: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired
  }

