import {
    GraphQLNonNull,
    GraphQLBoolean,
} from 'graphql';

import WalkInput from '../../types/walkInput';
import Walk from '../../../models/Walk';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(WalkInput)
        }
    },
    async resolve (root, params, options) {
        const walkModel = new Walk(params.data);
        const newWalk = await walkModel.save();

        if(!newWalk){
            throw new Error('Error creating new walk');
        }

        return true;
    }
};
