import { IsNotEmpty, IsObject, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateAuditLogDto {
  @IsOptional()
  @IsUUID()
  actorId?: string;

  @IsNotEmpty()
  @IsString()
  action!: string;

  @IsNotEmpty()
  @IsString()
  targetType!: string;

  @IsNotEmpty()
  @IsUUID()
  targetId!: string;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsObject()
  details?: Record<string, unknown>;
}
