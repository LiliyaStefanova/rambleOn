import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

const app = express();

//Create GraphQL server route

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true
})));

//DB connection

mongoose.connect('mongodb://localhost/rambleon');   //TODO - need to create MongoDb collection
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
