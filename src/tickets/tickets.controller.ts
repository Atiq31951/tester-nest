import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';

import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { FilterTicketsDto } from './dto/filter-tickets.dto.js';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) { }

    @Post('create')
    create(@Body() values: CreateTicketDto) {
        return this.ticketsService.createTicket(values);
    }

    @Get()
    getTickets(
        @Query() query: FilterTicketsDto
    ) {
        return this.ticketsService.getTickets(query);
    }

    @Get('/:id')
    getTicket(@Param('id', ParseIntPipe) id: number) {
        return this.ticketsService.getTicket(id);
    }
}
