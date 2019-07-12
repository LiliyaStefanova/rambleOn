import walkResolvers from './Walk'
import { GraphQLDate } from 'graphql-iso-date';

const customScalarResolver = {
  Date: GraphQLDate
}

export default [
  walkResolvers,
  customScalarResolver
];
