import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FoodsModule } from './foods/foods.module';

import { FileModule } from './file/file.module';

@Module({
  imports: [FoodsModule, FileModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
