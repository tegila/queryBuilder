const find = require('./find');
const insert = require('./insert');
const remove = require('./remove');
const update = require('./update');

const queryBuilder = () => {
  const transaction = {
    database: null,
    collection: null,
    type: null,
    payload: {},
  };

  return (self = {
    database: name => {
      // console.log('database');
      Object.assign(transaction, { database: name });
      return self;
    },
    collection: name => {
      // console.log('collection');
      Object.assign(transaction, { collection: name });
      return self;
    },
    find: filter =>
      find({
        ...transaction,
        type: 'find',
        payload: {
          type: 'findOne',
          filter: filter || {},
        },
      }),
    insert: data =>
      insert({
        ...transaction,
        type: 'insert',
        payload: {
          type: 'insertOne',
          data: data,
        },
      }),
    update: filter =>
      update({
        ...transaction,
        type: 'update',
        payload: {
          type: 'updateOne',
          filter: filter || {},
        },
      }),
    remove: filter =>
      remove({
        ...transaction,
        type: 'remove',
        payload: {
          type: 'deleteOne',
          filter: filter || {},
        },
      }),
  });
};

module.exports = queryBuilder;
