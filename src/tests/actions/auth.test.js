import { login, logout } from '../../actions/auth';

test('Should generate login action object', () => {
    const action = login('12345')
    expect(action).toEqual({
        'type': 'LOGIN',
        'uid': '12345'
    })
})

test('Should generate logout action object', () => {
    const action = logout('12345')
    expect(action).toEqual({
        'type': 'LOGOUT'
    })
})