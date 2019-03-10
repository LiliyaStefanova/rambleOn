import { mergeTypes } from "merge-graphql-schemas";

import Walk from "./Walk";

const typeDefs = [Walk];

export default mergeTypes(typeDefs, {all: true});
