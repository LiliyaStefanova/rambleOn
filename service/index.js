// import express from 'express';
const express = require('express');
// import graphqlHTTP from 'express-graphql';
const graphqlHTTP = require('express-graphql');
// import mongoose from 'mongoose';
const mongoose = require('mongoose');

import schema from './graphql';

const app = express();

//Create GraphQL server route

app.use('/rambleOn', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

//DB connection

mongoose.connect('mongodb://localhost/rambleon');   //TODO - need to create MongoDb collections
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
   console.log('Connected to Db');
});

//Start

const server = app.listen(8080, () => {
    console.log(`Server listening at ${server.address().port}`);
});

module.exports = app;
