import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile();

    helloController = module.get<HelloController>(HelloController);
  });

  it('Api flow running', async () => {
    const welcome = await helloController.welcome();
    expect(welcome).toBe('Welcome, api flow running!');
  });

  it('Ping/pong for api flow', async () => {
    const ping = await helloController.ping();
    expect(ping).toBe('pong');
  });

  it('Time unix for api flow', async () => {
    const now = await helloController.now();
    expect(now).toBeGreaterThan(0);
  });
});
