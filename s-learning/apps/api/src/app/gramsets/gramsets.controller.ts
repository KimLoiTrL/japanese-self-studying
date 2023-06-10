import { Controller, Get } from '@nestjs/common';
import { Gramsets } from './schema/gramsets.schema';
import { GramsetsService } from './gramsets.service';

@Controller('gramsets')
export class GramsetsController {
  constructor(private readonly gramsetService:GramsetsService){}

  @Get()
  async getAll(): Promise<Gramsets[]>{
      return this.gramsetService.getAll();
  }
}
