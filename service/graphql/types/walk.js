import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLID,
    GraphQLNonNull,
} from 'graphql'

export default new GraphQLObjectType({
    name: 'Walk',
    fields:{
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        startLocation: {
            type: new GraphQLNonNull(GraphQLString)
        },
        endLocation: {
            type: new GraphQLNonNull(GraphQLString)
        },
        distance: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        difficulty: {
            type: new GraphQLNonNull(GraphQLString)
        },
        startDate: {
            type: new GraphQLNonNull(GraphQLString)
        },
        endDate: {
            type: new GraphQLNonNull(GraphQLString)
        },
        notes: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});
