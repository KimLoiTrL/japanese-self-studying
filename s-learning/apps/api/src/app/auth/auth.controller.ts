import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {

  constructor( private authService: AuthService){}

  @Post('/signUp')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto): Promise<{token: string}> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string, user: User }> {
    return this.authService.login(loginDto);
  }
}
