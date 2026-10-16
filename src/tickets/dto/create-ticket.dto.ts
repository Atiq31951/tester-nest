import { IsNotEmpty, IsString, MinLength, IsEnum, IsIn } from 'class-validator';

export class CreateTicketDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    readonly subject: string;

    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(['low', 'medium', 'high'])
    @IsIn(['low', 'medium', 'high'])
    readonly priority: 'low' | 'medium' | 'high';
}
