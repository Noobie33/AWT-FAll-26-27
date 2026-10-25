import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { BullModule } from "@nestjs/bull";
import { VerificationModule } from "./modules/verification/verification.module";
import { FraudFlagModule } from "./modules/fraud-flag/fraud-flag.module";
import { AuditLogModule } from "./modules/audit-log/audit-log.module";


@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    VerificationModule,
    FraudFlagModule,
    AuditLogModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
