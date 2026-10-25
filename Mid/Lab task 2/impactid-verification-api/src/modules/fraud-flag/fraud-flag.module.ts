import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FraudFlag } from "./entities/fraud-flag.entity";
import { FraudFlagController } from "./fraud-flag.controller";
import { FraudFlagService } from "./fraud-flag.service";

@Module({
  imports: [TypeOrmModule.forFeature([FraudFlag])],
  controllers: [FraudFlagController],
  providers: [FraudFlagService],
})
export class FraudFlagModule {}
