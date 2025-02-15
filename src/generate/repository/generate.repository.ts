import { Injectable } from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class GenerateRepository {
    private readonly redis: Redis;

    constructor() {
        this.redis = new Redis();
    }

    async save(id: string, number: number): Promise<{ id: string; number: number }> {
        await this.redis.set(id, number);
        return { id, number };
    }

    async getById(id: string): Promise<number | null> {
        const value = await this.redis.get(id);
        return value ? Number(value) : null;
      }
}