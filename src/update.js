const Update = (transaction) => {
  /** Field Update Operators */
  return self = {
    with: new_value => {
      Object.assign(transaction.payload, { update: new_value });
      return self;
    },
    many: () => {
      Object.assign(transaction.payload, { type: 'updateMany' });
      return self;
    },
    ops: ops => {
      Object.assign(transaction.payload, { ops });
      return self;
    },
    value: () => {
      return transaction;
    }
  }
};

module.exports = Update;
