import { Controller, Get, Param } from '@nestjs/common';
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
}
