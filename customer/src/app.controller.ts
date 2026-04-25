import { Controller, Get, Post } from '@nestjs/common'; //body kita ubah jai Get, karena get berfungsi menghubungkan ke localhost(http)
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('barang') //dihalaman localhost akan tampil di dasboard nama barang yang kita buat karena disini kita menggunakan get
  getBarang(): string {
    return 'uang kas masjid';
  }

  @Post('barang/masuk')
  barangMasuk(): string {
    return 'uang masuk';
  }

  @Post('barang/keluar')
  barangKeluar(): string {
    return 'uang keluar';
  }
}
