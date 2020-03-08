import createStore, { preloadedState } from '../../../src/redux/createStore';
import countModule from '../../../src/redux/modules/countModule';

describe('postIsAuthorizedRequest', () => {
  it('should be as expected when using postIsAuthorizedRequest with true', () => {
    const mockStore = createStore(preloadedState);
    mockStore.dispatch(countModule.actions.plusOne());

    const expected = {
      count: 1
    };

    expect(mockStore.getState().count).toStrictEqual(expected);
  });
});
