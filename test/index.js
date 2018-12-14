const chai = require('chai')
const should = chai.should(),
  expect = chai.expect;

const queryBuilder = require('../');
const find_json = require('./samples/task.read.json');

describe('MongoClient.find patterns', () => {
  it('basic query', () => {
    
    const basic_find = queryBuilder()
      .database("app")
      .collection("Todos")
      .find({})
      .getPayload();

    // console.log(basic_find);
    
    expect(basic_find).to.be.an('object');

    expect(basic_find).to.have.all.keys(
      'database', 
      'collection', 
      'type', 
      'payload'
    );

    expect(basic_find.database, 'find [database]').to.be.equal("app");
    expect(basic_find.collection, 'find [collection]').to.be.equal("Todos");
    expect(basic_find).to.deep.own.include(find_json.basic);

  });
});
