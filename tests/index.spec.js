const expect = require('chai').expect;
const author = require('../src/index');

describe('One Type', function() {
  it('Technical and Code Publications, by Yair', function() {
    const actual = author();
    const expected = '@agzeri';

    expect(actual).to.equal(expected);
  });
});
