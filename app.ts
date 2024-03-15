import express from 'express';

import bodyParser from 'body-parser';

import routerfile from './routes/todo'

const app= express()
app.use(bodyParser.json())
app.use(routerfile)


app.listen(2000)