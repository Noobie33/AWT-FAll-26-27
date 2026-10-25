import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFraudFlagsTable1792900000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "fraud_flags",
      columns: [
        { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
        { name: "participation_id", type: "uuid", isNullable: false },
        { name: "reviewed_by", type: "uuid", isNullable: true },
        { name: "rule_code", type: "varchar", isNullable: false },
        { name: "details", type: "text", isNullable: false },
        { name: "status", type: "varchar", isNullable: false },
        { name: "created_at", type: "timestamptz", default: "CURRENT_TIMESTAMP" },
        { name: "reviewed_at", type: "timestamptz", isNullable: true },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("fraud_flags");
  }
}
