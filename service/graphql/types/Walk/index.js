export default `
  type Walk {
    _id: ID!
    name: String!
    startLocation: String!
    endLocation: String!
    distance: Int!
    difficulty: Int
    startDate: String!
    endDate: String!
    summary: String
  }
  
  type Query {
    walk(_id: ID!): Walk
    walks: [Walk]
  }
  
  type Mutation {
    addWalk(id: String!, name: String!, startLocation: String!, endLocation: String!,
    distance: Int!, difficulty: Int, startDate: String!, endDate: String!, summary: String): Walk
    
    removeWalk(id: String!): Walk
  }
`;
