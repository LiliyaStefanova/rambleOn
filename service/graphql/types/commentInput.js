import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'CommentInput',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        walkId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        body: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});
