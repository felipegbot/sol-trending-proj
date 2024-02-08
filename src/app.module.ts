import { Module } from '@nestjs/common';
import { TrendingModule } from './trending/trending.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TrendingModule, AuthModule],
})
export class AppModule { }
