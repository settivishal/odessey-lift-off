import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import TrackAPI from "./track-api.js";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer().catch((error) => {
  console.error("Error starting Apollo Server:", error);
  process.exit(1);
});
