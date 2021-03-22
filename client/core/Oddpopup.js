import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';
import { divide, method } from 'lodash'
import Dotloader from "react-spinners/DotLoader";

import '../../assets/assets-per/css/style.css';
import '../../assets/assets-per/css/bootstrap.min.css';
import '../../assets/assets-per/css/responsive.css';
import '../../assets/assets-per/css/schedule-page-responsive.css';

function Oddpopup(props ){

return (props.trigger) ? (
    <div class="bet-modal-bg show">
    <div class="bet-modal open">
        <h1>tests</h1>
    </div>
</div>


) : null;



}

export default Oddpopup