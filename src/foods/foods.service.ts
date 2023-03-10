import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

import { PrismaService } from 'src/prisma.service';
import { foodDto } from './food.dto';

@Injectable()
export class FoodsService {
  constructor(private readonly prisma: PrismaService) {}

  async getFoodById(id: string) {
    const food = await this.prisma.food.findUnique({
      where: {
        id: id,
      },
    });
    if (!food) {
      throw new NotFoundException();
    }
    return food;
  }

  async addFood(dto: foodDto) {
    const food = await this.prisma.food.create({
      data: {
        name: dto.name,
        descr: dto.descr,
        price: dto.price,
        imgUrl: dto.imgUrl,
      },
    });
    return food;
  }

  async getAllFood() {
    return await this.prisma.food.findMany();
  }

  async deleteById(id: string) {
    try {
      await this.prisma.food.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return {
      messege: 'food deleted',
    };
  }
  async update(id: string, dto: foodDto) {
    const food = await this.prisma.food.findUnique({
      where: {
        id,
      },
    });
    if (!food) {
      throw new NotFoundException();
    }
    const updated = await this.prisma.food.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        descr: dto.descr,
        price: dto.price,
        imgUrl: dto.imgUrl,
      },
    });
  }
}
