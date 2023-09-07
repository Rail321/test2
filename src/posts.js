const baseUrl = 'https://jsonplaceholder.typicode.com';

const route = '/posts';

const _limit = 5;
const _sort = 'id';
const _order = 'asc';
const _page = 1;

const id = 2;
const userId = 1;
const title_like = 'qui';
const body_like = 'est';

const params = {
  _limit,
  _sort,
  _order,
  _page,
  id,
  userId,
  title_like,
  body_like
};

const urlParams = new URLSearchParams( params );

const url = baseUrl + route + '?' + urlParams;

fetch( url )
  .then( r => {
    const headers = r.headers;
    const xTotalCount = headers.get( 'x-total-count' );
    return r.json();
  } )
  .then( d => {
    const data = d;
  } );