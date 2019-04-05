
const Insert = (parent, data) => {
  const payload = Object.assign({}, parent.payload, {
    type: 'insert',
    subtype: 'insertOne',
    data: data,
    nonce: Math.random()
  });

  const self = {
    payload,
    one: (data) => {
      payload = Object.assign(payload, { data: data });
      return parent;
    },
    many: (array) => {
      payload = Object.assign(payload, { 
        subtype: 'insertMany',
        data: array
      });
      return parent;
    },
    options: (options) => {
      payload = Object.assign(payload, { options: options });
      return parent;
    },
    value: () => payload
  };

  return Object.assign(parent, self);
};

module.exports = Insert;
