const DEV = true;

let api;
let socket;
let graphql_api;
let session_token_route;
let get_manifest_for_session_token;

if (DEV === true) {
  api = 'https://api-dev.thecampustap.com';
  socket = 'wss://api-dev.thecampustap.com/socket';
  graphql_api = 'https://api-dev.thecampustap.com/graphql';
  session_token_route = 'https://api-dev.thecampustap.com/mobile-auth';
  get_manifest_for_session_token =
    'https://api-dev.thecampustap.com/v2/current-user';
} else {
  api = 'https://api.thecampustap.com';
  socket = 'wss://api.thecampustap.com/socket';
  graphql_api = 'https://api.thecampustap.com/graphql';
  session_token_route = 'https://api.thecampustap.com/mobile-auth';
  get_manifest_for_session_token =
    'https://api.thecampustap.com/v2/current-user';
}

export const API_LOCATION = api;
export const SOCKET_API_LOCATION = socket;
export const GRAPHQL_API_LOCATION = graphql_api;
export const GET_SESSION_TOKEN_ROUTE = session_token_route;
export const GET_MANIFEST_FOR_SESSION_TOKEN_ROUTE = get_manifest_for_session_token;
export const BEARER_TOKEN =
  'Bearer 5wYm34SeRurXScBAQCIdavHkz824rTlPczSriDqO5p5feok2v7_syfBQVspADaPU';
