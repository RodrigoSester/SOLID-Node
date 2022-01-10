import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id)

    if(!user){
      throw new Error("User ID do not exist")
    }

    if(user.admin){
      return this.usersRepository.turnAdmin(user)
    }

    throw new Error("Only admin can turn user in admin")
  }
}

export { TurnUserAdminUseCase };
