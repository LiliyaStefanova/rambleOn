import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import WalkType from '../../types/walk';
import getProjection from '../../getProjection';
import WalkModel from '../../../models/Walk';

export default {
    type: WalkType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },

    async resolve (root, params, options ){
        const projection = getProjection(options.fieldASTs[0]);
        const removedWalk = await WalkModel
            .findByIdAndRemove(params._id, {
                select: projection
            })
            .exec();

        if(!removedWalk){
            throw new Error(`Error removing walk ${params._id}`);
        }

        return removedWalk;
    }
};
