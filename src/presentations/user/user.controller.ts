import { UsecaseProxyModule } from '../../infrastructures/usecase-proxy/usecase-proxy.module';
import { Controller, Get, Inject } from "@nestjs/common";
import { UseCaseProxy } from '../../infrastructures/usecase-proxy/usecase-proxy';
import { GetAllUserUseCases } from '../../applications/use-cases/user.usecase';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UsecaseProxyModule.GET_ALL_USERS_USE_CASE)
    private readonly getUserUsecaseProxy: UseCaseProxy<GetAllUserUseCases>,
  ) {}

  @Get('')
  async getAllUsers() {
    const result = await this.getUserUsecaseProxy.getInstance().execute();
    return {
      status: 'OK',
      code: 200,
      message: 'Get data success',
      data: result,
    };
  }
}
