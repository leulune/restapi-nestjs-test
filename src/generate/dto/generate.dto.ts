import { IsUUID } from "class-validator";

export class RetrieveDto {
    @IsUUID()
    id!: string;
}