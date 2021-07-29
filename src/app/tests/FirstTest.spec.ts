import{ User } from '@models/User'

test('it should be ok', () => {
    const user = new User()

    user.name = "João Luiz"

    expect(user.name).toEqual('João Luiz')
})