import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    userController = module.get<UsersController>(UsersController);
  });

  // it('User get all', () => {
  //   expect(userController.getUsers()).toBe('users');
  // });

  // it('User set password', () => {
  //   expect(userController.setPassword()).toBe();
  // });
});
