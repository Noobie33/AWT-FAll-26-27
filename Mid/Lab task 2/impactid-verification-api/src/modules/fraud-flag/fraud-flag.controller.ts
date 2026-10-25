import { Body, Controller, Get, Post } from "@nestjs/common";
import { FraudFlagService } from "./fraud-flag.service";
import { CreateFraudFlagDto } from "./dto/fraud-flag.dto";

@Controller("fraud-flags")
export class FraudFlagController {
  constructor(private readonly fraudFlagService: FraudFlagService) {}

  @Post()
  async createFraudFlag(@Body() dto: CreateFraudFlagDto) {
    return await this.fraudFlagService.createFraudFlag(dto);
  }

  @Get()
  async getFraudFlags() {
    return await this.fraudFlagService.getFraudFlags();
  }
}
