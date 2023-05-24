import { Controller, Get } from '@nestjs/common';
import { Sets } from './schema/sets.schema';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private readonly setService:SetsService){}

    @Get()
    async getAll(): Promise<Sets[]>{
        return this.setService.getAll();
    }
}
