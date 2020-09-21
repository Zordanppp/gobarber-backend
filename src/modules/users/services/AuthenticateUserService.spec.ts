import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'John Doe',
      email: 'jondoe@example.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'jondoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });
});
