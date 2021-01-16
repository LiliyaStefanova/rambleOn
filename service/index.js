import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from "cors";
import config from 'config'


import schema from './graphql/';

const app = express();
const db = config.get('db.uri');
const port= config.get('server.port');


//DB
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  ).then(() => console.log("DB connected"))
  .catch(err => console.log(err));


//Create GraphQL server route

app.use(
  '/rambleOn',
  cors(),
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
);


//Start

app.listen(port, () => {
  //eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
