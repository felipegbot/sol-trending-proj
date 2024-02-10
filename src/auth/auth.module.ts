import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

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
  ],
})
export class AuthModule {
}
