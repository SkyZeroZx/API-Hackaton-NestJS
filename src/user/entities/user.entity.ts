import {
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { MinLength, IsNotEmpty, IsEmail, MaxLength } from 'class-validator';
import * as bcrypt from 'bcryptjs';
import { Constants } from '../../common/constants/Constant';
import { Notification } from '../../notification/entities/notification.entity';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  @JoinColumn()
  @OneToMany(() => Notification, (Notificacion) => Notificacion.id, {
    nullable: false,
  })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @MinLength(6)
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @Column({ type: 'varchar', length: 128, nullable: false, select: false })
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;

  @Column('varchar', { length: 80 })
  @MinLength(2)
  @MaxLength(80)
  @IsNotEmpty()
  name: string;

  @Column('varchar', { length: 120 })
  @MinLength(2)
  @MaxLength(120)
  @IsNotEmpty()
  fatherLastName: string;

  @Column('varchar', { length: 120 })
  @MinLength(2)
  @MaxLength(120)
  @IsNotEmpty()
  motherLastName: string;

  @Column('varchar', { length: 35, default: 'CREADO' })
  status: string;

  @Column('boolean', { default: true })
  firstLogin: boolean;

  @Column('text', { default: null })
  photo: string;

  @Column('varchar', { length: 9, default: null })
  @MinLength(9)
  @MaxLength(9)
  @IsNotEmpty()
  phone: string;

  @Column('text', { default: null })
  experience: string;

  @Column('text', { default: null })
  softSkills: string;

  @Column('text', { default: null })
  techSkills: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  @BeforeUpdate()
  async firstLoginStatus() {
    if (this.status === Constants.STATUS_USER.HABILITADO) {
      this.firstLogin = false;
    } else {
      this.firstLogin = true;
    }
  }
}
