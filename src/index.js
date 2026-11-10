'use strict'
const express = require('express')
const app = express()
app.use(express.json())
app.get('/actuator/health', (_, res) => res.json({ status: 'UP' }))
app.get('/onboardings', (_, res) => res.json({ status: 'ok' }))
app.post('/onboardings', (_, res) => res.json({ status: 'ok' }))
app.get('/onboardings/:id', (_, res) => res.json({ status: 'ok' }))
app.listen(process.env.PORT || 8105)
