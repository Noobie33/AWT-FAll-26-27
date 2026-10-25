import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVerificationsTable1792900000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "verifications",
      columns: [
        { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
        { name: "participation_id", type: "uuid", isNullable: false },
        { name: "verifier_id", type: "uuid", isNullable: false },
        { name: "type", type: "varchar", isNullable: false },
        { name: "status", type: "varchar", isNullable: false },
        { name: "confirmed_hours", type: "double precision", isNullable: true },
        { name: "reason", type: "text", isNullable: true },
        { name: "decided_at", type: "timestamptz", default: "CURRENT_TIMESTAMP" },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("verifications");
  }
}
