import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
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

  @Post()
  async createCard(@Body() cards : Cards){
    return this.cardService.createCard(cards);
  }

  @Put('/:id')
  async updateCard(@Param('id') id:string, @Body() cards : Cards){
    return await this.cardService.updateCard(id, cards);
  }

  @Delete('/:id')
  async deleteCard(@Param('id') id:string){
    await this.cardService.deleteCard(id);
  }
}
