const config = {};

//TODO set up config.json - https://www.npmjs.com/package/config
config.db = {
  user: "elster",
  pass: "elstere903",
  uri: `mongodb+srv://elster:elstere903@sandbox-ksddg.mongodb.net/test?retryWrites=true`,
};

config.server = {
  port: process.env.PORT || "8080"
}

export default config;
