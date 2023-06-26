import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Sets } from './schema/sets.schema';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private readonly setService:SetsService){}

    @Get()
    async getAll(): Promise<Sets[]>{
        return this.setService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.setService.findOne(id);
    }

    @Get('/:id/cards')
    async getCardsBySet(@Param('id') setId: string): Promise<any> {
        return this.setService.getCardsBySet(setId);
    }

    @Post()
    async createSet(@Body() sets: Sets){
      return this.setService.createSet(sets);
    }

    @Put('/:id')
    async updateSet(@Param('id') id:string, @Body() sets: Sets){
      return await this.setService.updateSet(id, sets);
    }

    @Delete('/:id')
    async deleteSet(@Param('id') id:string){
      await this.setService.deleteSet(id);
    }
}
