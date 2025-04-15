import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs });
  const {url} = await startStandaloneServer(server);
  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer().catch((error) => {
  console.error("Error starting Apollo Server:", error);
  process.exit(1);
});