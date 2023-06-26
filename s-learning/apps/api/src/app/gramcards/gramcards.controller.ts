import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
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

  @Post()
  async createGramcard(@Body() gramcards: Gramcards){
    return this.GramcardService.createGramcard(gramcards);
  }

  @Put('/:id')
  async updateGramcard(@Param('id') id:string, @Body() gramcards: Gramcards){
    return await this.GramcardService.updateGramcard(id, gramcards);
  }

  @Delete('/:id')
  async deleteGramcard(@Param('id') id:string){
    await this.GramcardService.deleteGramcard(id);
  }
}
