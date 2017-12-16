import { expect } from 'chai';
import author from '../src/index';

describe('One Type', () => {
  it('Technical and Code Publications, by Yair', () => {
    const actual = author('agzeri');
    const expected = '@agzeri';

    expect(actual).to.equal(expected);
  });
});
