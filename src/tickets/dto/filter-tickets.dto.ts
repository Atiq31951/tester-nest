import { IsEnum, IsIn, IsNumber, IsOptional, Min } from "class-validator";
import { Type } from "class-transformer";

import { Ticket } from "../ticket.interface.js";

export class FilterTicketsDto {

    @IsOptional()
    @IsEnum(['open', 'closed'])
    @IsIn(['open', 'closed'])
    status?: Ticket['status'];

    @IsOptional()
    @IsEnum(['low', 'medium', 'high'])
    @IsIn(['low', 'medium', 'high'])
    priority?: Ticket['priority'];

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    limit?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    page?: number;
}
