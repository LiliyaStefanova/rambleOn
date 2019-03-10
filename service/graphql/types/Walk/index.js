export default `
  type Walk {
    id: String!
    name: String!
    startLocation: String!
    endLocation: String!
  }
  
  type Query {
    walk(id: String!): Walk
    walks: [Walk]
  }
  
  type Mutation {
    addWalk(id: String!, name: String!, startLocation: String!, endLocation: String!): Walk
    removeWalk(id: String!): Walk
  }
`;
