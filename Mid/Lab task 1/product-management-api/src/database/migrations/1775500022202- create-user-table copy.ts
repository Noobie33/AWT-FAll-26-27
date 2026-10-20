
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1775500022202
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "category",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "price",
            type: "double precision",
            isNullable: false,
          },
          {
            name: "quantity",
            type: "integer",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
