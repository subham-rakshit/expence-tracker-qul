import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GridBackground from "./components/ui/GrideBackground";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_SERVER_BASE_URL}/graphql`, // The URL of our Graphql server
  cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
  credentials: "include", // This tells Apollo Client to send cookies along with every request to the server
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GridBackground>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </GridBackground>
  </StrictMode>
);
