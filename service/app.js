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

mongoose.connect('mongodb://localhost/graphql')

module.exports = app;
