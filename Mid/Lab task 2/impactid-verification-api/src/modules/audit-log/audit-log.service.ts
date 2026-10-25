import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuditLog } from "./entities/audit-log.entity";
import { CreateAuditLogDto } from "./dto/audit-log.dto";

@Injectable()
export class AuditLogService {
  constructor(
    @InjectRepository(AuditLog)
    private readonly auditLogRepository: Repository<AuditLog>,
  ) {}

  async createAuditLog(dto: CreateAuditLogDto) {
    try {
      const auditLog = this.auditLogRepository.create(dto);
      return await this.auditLogRepository.save(auditLog);
    } catch (error) {
      throw error;
    }
  }

  async getAuditLogs() {
    try {
      return await this.auditLogRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
