import { IsString, IsNumber } from 'class-validator';

export class foodDto {
  @IsString()
  name: string;
  @IsString()
  descr: string;
  @IsNumber()
  price: number;
  @IsString()
  imgUrl: string;
}
