
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string;

  @Column("double precision")
  price!: number;

  @Column("integer")
  quantity!: number;
}
