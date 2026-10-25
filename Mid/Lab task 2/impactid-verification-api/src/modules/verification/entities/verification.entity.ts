import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "verifications" })
export class Verification {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "participation_id", type: "uuid" })
  participationId!: string;

  @Column({ name: "verifier_id", type: "uuid" })
  verifierId!: string;

  @Column({ type: "varchar" })
  type!: string;

  @Column({ type: "varchar" })
  status!: string;

  @Column({ name: "confirmed_hours", type: "double precision", nullable: true })
  confirmedHours?: number | null;

  @Column({ type: "text", nullable: true })
  reason?: string | null;

  @CreateDateColumn({ name: "decided_at", type: "timestamptz" })
  decidedAt!: Date;
}
