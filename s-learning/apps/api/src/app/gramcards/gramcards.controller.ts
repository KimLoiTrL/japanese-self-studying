import { Controller, Get, Param } from '@nestjs/common';
import { Gramcards } from './schema/gramcards.schema';
import { GramcardsService } from './gramcards.service';

@Controller('gramcards')
export class GramcardsController {
  constructor(private readonly GramcardService:GramcardsService){}

  @Get()
  async getAll(): Promise<Gramcards[]>{
    return this.GramcardService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.GramcardService.findOne(id);
  }
}
