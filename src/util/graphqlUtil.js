import {
  ApolloClient,
  gql,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8001/v1/graphql',
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: 'http://localhost:8001/v1/graphql',
});

// Addresses a console warning, splitting communication by operation.
// This is a recommended setup.
// More info: https://www.apollographql.com/docs/react/data/subs\iptions/#3-split-communication-by-operation-recommended
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const graphQLClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const MONITOR_DATA_SUBSCRIPTION = gql`
  subscription MySubscription {
    ixp_server_data(order_by: { ixp: asc }) {
      ixp
      city
      country
      protocol
      number_of_peers
      number_of_rib_entries
      rs_local_asn
      total_number_of_neighbors
      updated_at
    }
  }
`;

const ADD_ENTRY_MUTATION = gql`
  mutation AddEntry(
    $ixp: String!
    $city: String!
    $country: String!
    $protocol: String!
    $number_of_peers: Int
    $number_of_rib_entries: Int
    $rs_local_asn: Int
    $total_number_of_neighbors: Int
    $updated_at: timestamptz
  ) {
    insert_ixp_server_data_one(
      object: {
        ixp: $ixp
        city: $city
        country: $country
        protocol: $protocol
        number_of_peers: $number_of_peers
        number_of_rib_entries: $number_of_rib_entries
        rs_local_asn: $rs_local_asn
        total_number_of_neighbors: $total_number_of_neighbors
        updated_at: $updated_at
      }
    ) {
      ixp
      city
      country
      protocol
      number_of_peers
      number_of_rib_entries
      rs_local_asn
      total_number_of_neighbors
      updated_at
    }
  }
`;

export { graphQLClient, MONITOR_DATA_SUBSCRIPTION, ADD_ENTRY_MUTATION };
