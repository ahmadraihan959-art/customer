import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service'; //digunakan untuk mengimpor AuthService dari folder service yang berada di dalam folder auth.

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {} //digunakan untuk menghubungkan controller dengan service, lalu private readonly hanya bisa digunakan di dalam class dan tidak bisa di ubah nilainya.

  @Post('login') //digunakan untuk alamat API yang akan diakses.
  login(@Body() body: any) {
    //digunakan untuk mengambil data dari request body.
    return this.authService.login(body); //return untuk mengirim data controller ke service lalu this. AuthService digunakan untuk cek username & password dan untuk mengembalikan hasil (success/gagal).
  }
}
