import { Body, Controller, Get, Post } from "@nestjs/common";
import { VerificationService } from "./verification.service";
import { CreateVerificationDto } from "./dto/verification.dto";

@Controller("verifications")
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Post()
  async createVerification(@Body() dto: CreateVerificationDto) {
    return await this.verificationService.createVerification(dto);
  }

  @Get()
  async getVerifications() {
    return await this.verificationService.getVerifications();
  }
}
