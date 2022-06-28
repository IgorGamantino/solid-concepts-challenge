import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui

    const findById = this.usersRepository.findById(user_id);

    if (!findById) {
      throw new Error("Mensagem do erro");
    }

    if (findById.admin) {
      const allUsers = this.usersRepository.list();

      return allUsers;
    }

    throw new Error("Mensagem do erro");
  }
}

export { ListAllUsersUseCase };
