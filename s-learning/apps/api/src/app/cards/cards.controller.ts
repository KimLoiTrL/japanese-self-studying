import { Controller, Get, Param } from '@nestjs/common';
import { Cards } from './schema/cards.schema';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardService:CardsService){}

  @Get()
  async getAll(): Promise<Cards[]>{
    return this.cardService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cardService.findOne(id);
  }
}
