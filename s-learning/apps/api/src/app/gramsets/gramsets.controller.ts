import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { Gramsets } from './schema/gramsets.schema';
import { GramsetsService } from './gramsets.service';

@Controller('gramsets')
export class GramsetsController {
  constructor(private readonly gramsetService:GramsetsService){}

  @Get()
  async getAll(): Promise<Gramsets[]>{
      return this.gramsetService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      return await this.gramsetService.findOne(id);
  }

  @Get('/:id/gramcards')
  async getGramcardsBySet(@Param('id') GramsetId: string): Promise<any> {
      return this.gramsetService.getGramcardsBySet(GramsetId);
  }

  @Post()
  async createGramset(@Body() gramsets: Gramsets){
    return this.gramsetService.createGramset(gramsets);
  }

  @Put('/:id')
  async updateGramset(@Param('id') id:string, @Body() gramsets: Gramsets){
    return await this.gramsetService.updateGramset(id, gramsets);
  }

  @Delete('/:id')
  async deleteGramset(@Param('id') id:string){
    await this.gramsetService.deleteGramset(id);
  }
}
