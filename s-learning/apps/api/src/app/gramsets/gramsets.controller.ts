import { Controller, Get, Param } from '@nestjs/common';
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
}
