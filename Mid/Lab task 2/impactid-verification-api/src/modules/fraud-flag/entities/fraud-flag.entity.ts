import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "fraud_flags" })
export class FraudFlag {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "participation_id", type: "uuid" })
  participationId!: string;

  @Column({ name: "reviewed_by", type: "uuid", nullable: true })
  reviewedBy?: string | null;

  @Column({ name: "rule_code", type: "varchar" })
  ruleCode!: string;

  @Column({ type: "text" })
  details!: string;

  @Column({ type: "varchar" })
  status!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  @Column({ name: "reviewed_at", type: "timestamptz", nullable: true })
  reviewedAt?: Date | null;
}
