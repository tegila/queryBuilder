const find = require('./find');
const insert = require('./insert');
const remove = require('./remove');
const update = require('./update');

const queryBuilder = (target) => {
  const [database, collection] = target.split("/");
  const transaction = {
    database,
    collection,
    payload: {}
  };

  return {
    remove: (order) => {

    },  
    find: (query) => find({
      ...transaction,
      type: 'find',
      payload: {        
        query: query || {}
      }
    }),
    insert: (type) => insert({
      ...transaction,
      type: type
    })

  };
};

module.exports = queryBuilder;