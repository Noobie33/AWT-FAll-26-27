import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuditLogService } from "./audit-log.service";
import { CreateAuditLogDto } from "./dto/audit-log.dto";

@Controller("audit-logs")
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Post()
  async createAuditLog(@Body() dto: CreateAuditLogDto) {
    return await this.auditLogService.createAuditLog(dto);
  }

  @Get()
  async getAuditLogs() {
    return await this.auditLogService.getAuditLogs();
  }
}
