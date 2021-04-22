import authReducers from '../../reducers/auth';

test('Should set uid for login', () => {
    const action = {
        'type': 'LOGIN',
        'uid': '12345'
    };
    const state = authReducers({}, action);
    expect(state).toEqual({ uid: '12345' });
});

test('Should clear uid for Logout', () => {
    const action = {
        'type': 'LOGOUT',
        'uid': '12345'
    };
    const state = authReducers({ uid: '12345' }, action);
    expect(state).toEqual({});
});