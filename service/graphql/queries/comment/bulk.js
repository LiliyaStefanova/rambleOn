import {
  GraphQLList
} from 'graphql';

import CommentType from '../../types/comment';
import getProjection from '../../getProjection';
import CommentModel from '../../../models/comment';

export default {
  type: new GraphQLList(CommentType),
  args: {},
  resolve(root, params, options){
    const projection = getProjection(options.fieldASTs[0]);

    return CommentModel
      .find()
      .select(projection)
      .exec();
  }
};
