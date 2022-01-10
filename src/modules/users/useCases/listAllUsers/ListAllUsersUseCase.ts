import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if(!user || !user.admin){
      throw new Error("User is not exist or is not an admin");
    }
    
    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
