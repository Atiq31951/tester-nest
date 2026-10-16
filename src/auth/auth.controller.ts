import { Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register() {
        return this.authService.register();
    }

    @Get('login')
    login() {
        return this.authService.login();
    }
}
