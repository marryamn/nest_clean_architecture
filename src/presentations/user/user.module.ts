import { UserController } from './user.controller';
import { UsecaseProxyModule } from '../../infrastructures/usecase-proxy/usecase-proxy.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsecaseProxyModule.register()],
  controllers: [UserController],
})
export class UserModule {}
