import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "audit_logs" })
export class AuditLog {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "actor_id", type: "uuid", nullable: true })
  actorId?: string | null;

  @Column({ type: "varchar" })
  action!: string;

  @Column({ name: "target_type", type: "varchar" })
  targetType!: string;

  @Column({ name: "target_id", type: "uuid" })
  targetId!: string;

  @Column({ type: "text", nullable: true })
  reason?: string | null;

  @Column({ type: "jsonb", nullable: true })
  details?: Record<string, unknown> | null;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;
}
