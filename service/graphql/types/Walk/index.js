export default `
  type Walk {
    id: ID
    name: String!
    startLocation: String!
    endLocation: String!
    distance: Int!
    difficulty: Int
    startDate: String!
    endDate: String!
    summary: String
  }
  
  input WalkInput {
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
    walk(id: ID): Walk
    walks: [Walk]
  }
  
  type Mutation {
    addWalk(newWalk: WalkInput): Walk
    
    removeWalk(id: String!): Walk
  }
`;
