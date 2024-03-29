import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloLink,
  } from '@apollo/client';
  
  
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  });
  
  
  
  const client = new ApolloClient({
    link: ApolloLink.from([ httpLink]),
    cache: new InMemoryCache(),
  });
  
  export default client;
  