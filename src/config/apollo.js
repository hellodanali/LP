import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { GRAPHQL_API_LOCATION } from './api';
import { checkForSessionToken } from './authentication';

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_API_LOCATION
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      // Create the header object if needed.
      if (!req.options.headers) {
        req.options.headers = {};
      }

      // get the authentication token from Async storage
      // and assign it to the request object
      checkForSessionToken()
        .then(SESSION_TOKEN => {
          req.options.headers.Authorization = `Bearer ${SESSION_TOKEN}`;
          next();
        })
        .catch(error => {
          req.options.headers.Authorization = null;
          next();
        });
    }
  }
]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

export default client;
