import { Controller, Get, NotFoundException, Param, ParseUUIDPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GenerateService } from './generate.service';
import { RetrieveDto } from './dto/generate.dto';

@Controller('generate')
export class GenerateController {
    constructor(private readonly generateService: GenerateService) {}

    @Post('generate') 
    async generate() {
        return await this.generateService.generate();
    };

    @Get(':id')
    async retrieve(@Param() params: RetrieveDto) {
        const result = await this.generateService.retrieve(params.id);
        if (!result) {
            throw new NotFoundException('ID не найден');
        }
        return result;
    }
}
