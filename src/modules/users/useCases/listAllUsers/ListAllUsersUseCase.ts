import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if(!user){
      throw new Error("User ID do not exist")
    }
    if(user.admin){
      return this.usersRepository.list()
    }

    throw new Error("Bad Request")
  }
}

export { ListAllUsersUseCase };
