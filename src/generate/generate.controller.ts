import { Controller, HttpStatus, Post, Get, Body } from '@nestjs/common';
import { GenerateService } from './generate.service';
import { NewContentDto } from './dto/new-content.dto';

interface IResponse {
  status: HttpStatus;
  message: string;
  data: any;
}

@Controller('generate')
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Get('health')
  health(): IResponse {
    return {
      status: HttpStatus.OK,
      message: 'API health check',
      data: Date.now().toLocaleString(),
    };
  }

    @Post('new-content')
  async generate(@Body() newContentDto: NewContentDto):
  Promise<IResponse> {
    return await this.generateService.processNewContent(newContentDto);
  }
}