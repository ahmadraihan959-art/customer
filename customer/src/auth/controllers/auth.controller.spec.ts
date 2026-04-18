import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 🔐 LOGIN
  @Post('login')
  async login(@Body() body: any) {
    return this.authService.login(body);
  }

  // 📝 REGISTER
  @Post('register')
  async register(@Body() body: any) {
    return this.authService.register(body);
  }
}
