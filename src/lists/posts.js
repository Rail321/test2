export default {
  _limit: 5,
  _sort: 'id',
  _order: 'asc',
  _page: 1,
  get() {
    return (
      new Promise( resolve => {
        const params = {
          _limit: this._limit,
          _sort: this._sort,
          _order: this._order,
          _page: this._page,
          // id: 2,
          // userId: 2,
          // title_like: 'sunt',
          // body_like: 'quia'
        }
        const url = ( 'https://jsonplaceholder.typicode.com/posts' + '?' + ( new URLSearchParams( params ) ) )
        fetch( url )
          .then( r => (
            resolve( r )
          ) )
      } )
    )
  }
}