import { IsIn, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateFraudFlagDto {
  @IsNotEmpty()
  @IsUUID()
  participationId!: string;

  @IsNotEmpty()
  @IsString()
  ruleCode!: string;

  @IsNotEmpty()
  @IsString()
  details!: string;

  @IsNotEmpty()
  @IsIn(["Open", "Dismissed", "Confirmed"])
  status!: string;

  @IsOptional()
  @IsUUID()
  reviewedBy?: string;
}
