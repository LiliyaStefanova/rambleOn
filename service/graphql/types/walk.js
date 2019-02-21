import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLScalarType,
    GraphQLFloat,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'

export default new GraphQLInputObjectType({
    name: 'Walk',
    fields:{
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        start: {
            type: new GraphQLNonNull(GraphQLString)
        },
        end: {
            type: new GraphQLNonNull(GraphQLString)
        },
        distance: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        date: {
            type: new GraphQLNonNull(GraphQLScalarType)
        },
        notes: {
            type: new GraphQLString
        },
        resources: {
            type: GraphQLList
        },
        participants:{
            type: GraphQLList
        }

    }
});