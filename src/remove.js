const Delete = (transaction) => {
  return self = {
    deleteOne: (filter) => {
      console.log('deleteOne');
      Object.assign(transaction.payload.filter, { filter: filter });
      return self;
    },
    get value() {
      return transaction;
    }
  }
};

module.exports = Delete;
