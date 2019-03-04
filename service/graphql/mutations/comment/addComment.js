import {GraphQLBoolean, GraphQLNonNull,} from 'graphql'

//import the  mongoose model
import Comment from '../../../models/Comment'
//import the graphql type
import CommentInput from '../../types/commentInput'

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(CommentInput)
    }
  },
  async resolve (root, params, options) {
    const commentModel = new Comment(params.data)
    const newComment = await commentModel.save()

    if (!newComment) {
      throw new Error('Error adding new comment')
    }

    return true
  }

}
