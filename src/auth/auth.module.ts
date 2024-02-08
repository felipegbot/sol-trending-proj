import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { Logger } from '@/common/helpers/logger.helper';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret',
      signOptions: { expiresIn: '999d' },
    }),
  ],
  providers: [
    JwtStrategy,
    Logger,
  ],
})
export class AuthModule {
}
