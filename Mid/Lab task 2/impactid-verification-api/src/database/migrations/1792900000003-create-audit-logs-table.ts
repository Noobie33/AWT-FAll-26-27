import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAuditLogsTable1792900000003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "audit_logs",
      columns: [
        { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
        { name: "actor_id", type: "uuid", isNullable: true },
        { name: "action", type: "varchar", isNullable: false },
        { name: "target_type", type: "varchar", isNullable: false },
        { name: "target_id", type: "uuid", isNullable: false },
        { name: "reason", type: "text", isNullable: true },
        { name: "details", type: "jsonb", isNullable: true },
        { name: "created_at", type: "timestamptz", default: "CURRENT_TIMESTAMP" },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("audit_logs");
  }
}
