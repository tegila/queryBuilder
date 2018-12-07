const Delete = (transaction) => {
  return self = {
    delete: (filter) => {
      console.log('deleteOne');
      Object.assign(transaction.payload.filter, { filter: filter });
      return self;
    },
    getPayload: () => {
      return transaction;
    }
  }
};

module.exports = Delete;
