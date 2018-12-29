
const Insert = (transaction) => {
  return self = {
    data: (data) => {
      console.log('insertMany');
      payload = Object.assign(transaction.payload, { data: data });
      return self;
    },
    options: (options) => {
      payload = Object.assign(transaction.payload, { options: options });
      return self;
    },
    get value() {
      // console.log('payload', payload);
      return transaction;
    }
  };
};

module.exports = Insert;