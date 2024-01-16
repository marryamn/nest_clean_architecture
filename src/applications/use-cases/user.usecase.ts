import { UserRepository } from 'src/domains/repositories/user.repository';
import { UserM } from '../../domains/model/user.model';

export class GetAllUserUseCases {
  constructor(private usersRepository: UserRepository) {}

  async execute(): Promise<UserM[]> {
    return await this.usersRepository.getAllUsers();
  }
}
