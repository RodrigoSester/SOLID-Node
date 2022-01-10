import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";


interface IRequest {
  name: string;
  email: string;
  admin?: boolean
}

class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ email, name, admin }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email)

    if(userAlreadyExists){
      throw new Error("Email already exists")
    }
    
    return this.usersRepository.create({name, email, admin})
  }
}

export { CreateUserUseCase };
