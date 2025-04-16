import { users } from "../dummyData/data.js";

const useResolver = {
  Query: {
    users: (parent, args, context, info) => {
      return users;
    },
    user: (_, {userId}) => {
      return users.find(user => user._id === userId);
    },
  },
  Mutation: {},
};

export default useResolver;
