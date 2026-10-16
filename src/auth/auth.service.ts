import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    register() {
        console.log('register service');

        return {
            status: true,
            statusCode: 201,
            message: 'User registered successfully',
        };
    }

    login() {
        console.log('login service');

        const { email } = { email: "atiqur.rahman951@gmail.com" };

        const user = {
            id: 1,
            name: 'John Doe',
            // email: [EMAIL_ADDRESS]',
            email,
        };


        const token = "jwt_token";

        return {
            status: true,
            statusCode: 200,
            message: 'User logged in successfully',
            data: {
                token, user,
            },
        };
    }
}
