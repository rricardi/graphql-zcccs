const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const users = require('./schema')
const app = express()

app.use('/user', graphqlHTTP({schema:users, pretty: true, graphiql: true}))

app.listen(5000, function () {
  console.log('Server on.')
})