import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from "class-validator";

export class CreateVerificationDto {
  @IsNotEmpty()
  @IsUUID()
  participationId!: string;

  @IsNotEmpty()
  @IsUUID()
  verifierId!: string;

  @IsNotEmpty()
  @IsIn(["Organization", "Community"])
  type!: string;

  @IsNotEmpty()
  @IsIn(["Approved", "Rejected", "Revoked"])
  status!: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  confirmedHours?: number;

  @IsOptional()
  @IsString()
  reason?: string;
}
