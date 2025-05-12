import { Injectable } from '@nestjs/common';
import { NewContentDto } from './dto/new-content.dto';

@Injectable()
export class GenerateService {
  async processNewContent(newContentDto: NewContentDto) {
    const data = await Promise.resolve();
    console.log(newContentDto);

    return data;
  }
}