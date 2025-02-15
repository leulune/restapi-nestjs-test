import { Injectable } from '@nestjs/common';
import { GenerateRepository } from './repository/generate.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GenerateService {
    constructor(private readonly generateRepository: GenerateRepository) {}

    async generate(): Promise<{ id: string; number: number }> {
        const id = uuidv4();
        const number = Math.floor(Math.random() * 1000) + 1;

        return this.generateRepository.save(id, number);
      }

    async retrieve(id: string): Promise<number | null> {
        return this.generateRepository.getById(id);
    }
}
