// const express = require('express');
// const path = require('path');
// const db = require('./config/connection');
// const routes = require('./routes');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
const express = require('express');
const path = require('path');
const { Server } = require ("ApolloServer") ;
const ae = "apollo-server-express";
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

// Instantiate the required variables
const app = require(e)();
const PORT = process.env.PORT || 3001;
const server = new (require(ae)[A])({ typeDefs, resolvers, context: authMiddleware });
const _dirname = require(p).dirname("");
const buildPath = require(p).join(_dirname, "../client/build");

// Apply Apollo server with Express app
server.applyMiddleware({ app });

// Middleware parsing
app.use(require(e).urlencoded({ extended: true }));
app.use(require(e).json());

// Serve client/build as static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(require(e).static(require(p).join(__dirname, "../client/build")));
}

// Route for all requests
app.get("*", (req, res) => {
  res.sendFile(require(p).join(__dirname, "../client/build/index.html"));
});

// Start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
