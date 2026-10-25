import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FraudFlag } from "./entities/fraud-flag.entity";
import { CreateFraudFlagDto } from "./dto/fraud-flag.dto";

@Injectable()
export class FraudFlagService {
  constructor(
    @InjectRepository(FraudFlag)
    private readonly fraudFlagRepository: Repository<FraudFlag>,
  ) {}

  async createFraudFlag(dto: CreateFraudFlagDto) {
    try {
      const fraudFlag = this.fraudFlagRepository.create(dto);
      return await this.fraudFlagRepository.save(fraudFlag);
    } catch (error) {
      throw error;
    }
  }

  async getFraudFlags() {
    try {
      return await this.fraudFlagRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
