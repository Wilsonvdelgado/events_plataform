import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4r9h52a0r5p01yy0a2u3ab9/master",
  cache: new InMemoryCache(),
});
