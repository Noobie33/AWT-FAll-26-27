import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  register({ fullName, email, age, accountType }: CreateUserDto) {
    return { message: "User registered successfully", fullName, email, age, accountType };
  }
}
