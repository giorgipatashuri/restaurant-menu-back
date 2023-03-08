import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { foodDto } from './food.dto';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}
  @Post('create')
  create(@Body() dto: foodDto) {
    return this.foodsService.addFood(dto);
  }
  @Get()
  getAll() {
    return this.foodsService.getAllFood();
  }
  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.foodsService.deleteById(id);
  }
}
