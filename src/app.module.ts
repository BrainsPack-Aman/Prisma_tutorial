import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import { ArticlesModule } from './articles/articles.module.js';
import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, ArticlesModule, UsersModule, AuthModule],
})
export class AppModule {}
