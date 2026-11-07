import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  register(@Body() user: CreateUserDto) {
    return this.userService.register(user);
  }
}
