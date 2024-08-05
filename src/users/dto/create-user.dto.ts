import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(['INTERN', 'ADMIN'], {
    message: 'Role must be either INTERN or ADMIN',
  })
  role: 'INTERN' | 'ADMIN';
}
