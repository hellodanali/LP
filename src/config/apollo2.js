// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { GRAPHQL_API_LOCATION } from './api';
// import { checkForSessionToken } from './authentication';
//
// const httpLink = createHttpLink({ uri: GRAPHQL_API_LOCATION });
//
// const middlewareLink = setContext(() => {
//   // get the authentication token from Async storage
//   // and assign it to the request object
//   checkForSessionToken()
//     .then(SESSION_TOKEN => ({
//       headers: {
//         Authorization: `Bearer ${SESSION_TOKEN}`
//       }
//     }))
//     .catch(error => ({
//       headers: {
//         Authorization: null
//       }
//     }));
// });
//
// // use with apollo-client
// const link = middlewareLink.concat(httpLink);
//
// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache()
// });
//
// export default client;
