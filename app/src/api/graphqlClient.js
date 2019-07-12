import axios from 'axios';

const PATH_BASE = 'http://localhost:8080';
const PATH_GRAPHQL = '/rambleOn';

export function getRequest(query){
  request(query, 'get');
}

export function postRequest(query){
  request(query, 'post');
}

export function deleteRequest(query){
  request(query, 'delete');
}

function request(query, type){
  const finalQuery = {query: query};
  console.log(`Final query looks like: ${JSON.stringify(finalQuery)}`);
  axios({
    method: type,
    url: `${PATH_BASE}${PATH_GRAPHQL}`,
    headers: { 'Content-Type': 'application/json' },
    data: finalQuery
  }).then(result => {
    console.log(result.data.addWalk.id);
  }).catch(error => this.setState({ error }));
}
