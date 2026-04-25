import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(data: any) {
    const { username, password } = data;

    if (!username || !password) {
      return { status: false, message: 'Invalid input' };
    }

    if (username === 'admin' && password === '123') {
      return { status: true, message: 'Success' };
    }

    return { status: false, message: 'Failed' };
  }
}
