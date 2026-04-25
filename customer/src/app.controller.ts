import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('barang')
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
