'use client';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/utils/apollo/apollo-client';

const ApolloRegistry = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloRegistry;