import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import CommentType from '../../types/comment';
import getProjection from '../../getProjection';
import CommentModel from '../../../models/Comment';

export default {
  type: CommentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return CommentModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
}
