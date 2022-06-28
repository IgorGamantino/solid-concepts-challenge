import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const findByUserId = this.usersRepository.findById(user_id);

    if (!findByUserId) {
      throw new Error("Mensagem do erro");
    }

    const changeUserAdmin = this.usersRepository.turnAdmin(findByUserId);

    return changeUserAdmin;
  }
}

export { TurnUserAdminUseCase };
