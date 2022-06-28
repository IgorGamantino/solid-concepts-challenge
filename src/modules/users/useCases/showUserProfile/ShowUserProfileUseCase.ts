import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUserID = this.usersRepository.findById(user_id);

    if (!findUserID) {
      throw new Error("Mensagem do erro");
    }

    return findUserID;
  }
}

export { ShowUserProfileUseCase };
