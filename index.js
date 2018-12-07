const find = require('./find');
const insert = require('./insert');
const deleteQuery = require('./remove');
const updateQuery = require('./update');

const queryBuilder = (target) => {
  const [database, collection] = target.split("/");
  const transaction = {
    database,
    collection,
    payload: {}
  };

  return {
    queryMake: (query) => find({
      ...transaction,
      type: 'none',
      payload: {
        query: query || {}
      }
    }),
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
    }),
    updateOne: (filter, update, options) => updateQuery({
      ...transaction,
      type: 'updateOne',
      payload: {
        filter: filter || {},
        update: update || {},
        options: options || {}
      }
    }),
    updateMany: (filter, update, options) => updateQuery({
      ...transaction,
      type: 'updateMany',
      payload: {
        filter: filter || {},
        update: update || {},
        options: options || {}
      }
    }),
    deleteOne: (filter) => deleteQuery({
      ...transaction,
      type: 'deleteOne',
      payload: {
        filter: filter || {}
      }
    }),
    deleteMany: (filter) => deleteQuery({
      ...transaction,
      type: 'deleteMany',
      payload: {
        filter: filter || {}
      }
    })
  };
};

module.exports = queryBuilder;