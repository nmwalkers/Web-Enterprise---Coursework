import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'

import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import devBundle from './devBundle'

// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import theme from './../client/theme'
//end

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

devBundle.compile(app)
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers


// enable CORS - Cross Origin Resource Sharing
app.use(cors())
//enable user authentication
app.use('/', authRoutes)
//enable users 
app.use('/', userRoutes)

/**app.get('/', (req, res) => {
 res.status(200).send(Template())
}) */


app.get('*', (req, res) => {
    const sheets = new ServerStyleSheets()
    const context = {}
    const markup = ReactDOMServer.renderToString(
    sheets.collect(
    <StaticRouter location={req.url} context={context}>
    <ThemeProvider theme={theme}>
    <MainRouter />
    </ThemeProvider>
    </StaticRouter>
    )
    )
    if (context.url) {
    return res.redirect(303, context.url)
    }
    const css = sheets.toString()
    res.status(200).send(Template({
    markup: markup,
    css: css
    }))
   })



//unauthorised error handeling
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
    }
   })
   
export default app
