import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Verification } from "./entities/verification.entity";
import { CreateVerificationDto } from "./dto/verification.dto";

@Injectable()
export class VerificationService {
  constructor(
    @InjectRepository(Verification)
    private readonly verificationRepository: Repository<Verification>,
  ) {}

  async createVerification(dto: CreateVerificationDto) {
    try {
      const verification = this.verificationRepository.create(dto);
      return await this.verificationRepository.save(verification);
    } catch (error) {
      throw error;
    }
  }

  async getVerifications() {
    try {
      return await this.verificationRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
