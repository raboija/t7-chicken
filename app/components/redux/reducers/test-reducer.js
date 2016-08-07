import { Test } from '../actions/actionCreators.js';

export function test(state, action) {
	switch (action.type) {
		console.log('testing');
	case Test.TestTypes.TEST_ACTION: 
		return {
			test: state.test + action.test
		};

		default: return state;
	}
}