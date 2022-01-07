import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)

    return user
  }
}

export { ShowUserProfileUseCase };
