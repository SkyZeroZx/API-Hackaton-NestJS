import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { User } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(User) {
  @ApiProperty()
  @IsOptional()
  experience: string;

  @ApiProperty()
  @IsOptional()
  softSkills: string;

  @ApiProperty()
  @IsOptional()
  techSkills: string;
}
