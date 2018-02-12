function data(state, action) {
  switch(action.type) {
    case 'SEARCH_VIDEO': {
      const query = action.payload.query;
      const categories = state.data.categories;
      let results = [];
      if (query) {
        categories.map((category) => {
          results = results.concat(
            category.playlist.filter((item) => {
              const author = item.author.toLowerCase();
              return author.includes(query);
            })
          );
        });
      }
      return {
        ...state,
        search: results,
      }
    }
    default:
      return state;
  }
}

export default data;
