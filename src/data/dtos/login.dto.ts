import { IsEmail, IsNotEmpty, IsUrl } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsUrl()
  @IsNotEmpty()
  readonly currentWebsiteUrl: string;
}