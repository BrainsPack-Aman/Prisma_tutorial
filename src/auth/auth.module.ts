import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy.js';
import { UsersModule } from '../users/users.module.js';


export const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

@Module({
  controllers: [AuthController],
  providers: [AuthService , JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '5m' },
    }),
    UsersModule
  ],
})
export class AuthModule {}
