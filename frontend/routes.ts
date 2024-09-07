export const api_domain =
  process.env.NODE_ENV == "production"
    ? "https://calm-anchorage-11732-92ef6f50f60e.herokuapp.com/"
    : "http://localhost:8000/";

export const APIGateway = {
  api_domain: api_domain,
  route: route,
  api: api,
};

function api(endpoint: string) {
  return `${api_domain}api/${endpoint}`;
}

function route(path: string) {
  return `${api_domain}${path}}`;
}
