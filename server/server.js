const { GraphQLServer } = require("graphql-yoga");

const events = [];

const typeDefs = `
  type Event {
    id: ID!
    title: String!
  }

  type Query {
    events: [Event!]
    getEvent(id: Int!): Event
  }

  type Mutation {
    createEvent(title: String!): ID!
  }
`;

const resolvers = {
  Query: {
    events: () => events,
    getEvent: (parent, { id }) => events[id],
  },

  Mutation: {
    createEvent: (parent, { title }) => {
      const id = events.length;
      events.push({
        id,
        title,
      });
      return id;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }) => {
  console.log(`Server started on http://localhost:${port}/`);
});
