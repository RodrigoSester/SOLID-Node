import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";


interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email)

    if(userAlreadyExists){
      throw new Error("Email already exists")
    }    

    return this.usersRepository.create({name, email})
  }
}

export { CreateUserUseCase };
