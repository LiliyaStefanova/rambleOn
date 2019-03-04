import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import CommentType from '../../types/comment';
import getProjection from '../../getProjection';
import CommentModel from '../../../models/Comment';

export default {
  type: CommentType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options){
    const projection = getProjection(options.fieldASTs[0]);
    const removedComment = await CommentModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if(!removedComment){
      throw new Error('Error removing comment');
    }

    return removedComment;
  }
}
