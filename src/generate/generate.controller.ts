import { Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { GenerateService } from './generate.service';

interface IResponse {
    status: HttpStatus;
    message: string;async  processNewContent() {	
    return Promise.resolve()
}
}

@Controller('generate')
export class GenerateController {

constructor(
    private readonly generateService: GenerateService) {}

    @Get('health')
    health(): IResponse {
    return  {
        status: HttpStatus.OK,
        message: 'API health check',
        data: Date.now().toLocaleString(),
    };
}

        @Post('new-content')
        
    async generate():   Promise<IResponse> {
        return await this.generateService.processNewContent();
    }
}


