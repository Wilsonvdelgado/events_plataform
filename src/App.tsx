import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { Event } from "./pages/Event";
import { Router } from "./Router";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          {/* <Event /> */}
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;

// "eslint-import-resolver-typescript": "^3.2.4",
// "eslint-plugin-import": "^2.26.0",
