import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Injectable()
export class TicketsService {

    private tickets: Ticket[] = [
        {
            id: 1,
            subject: 'Ticket 1',
            description: 'Description 1',
            priority: 'low',
            status: 'open',
            createdAt: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(),
            updatedAt: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(),
        },
        {
            id: 2,
            subject: 'Ticket 2',
            description: 'Description 2',
            priority: 'medium',
            status: 'open',
            createdAt: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(),
            updatedAt: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(),
        },
        {
            id: 3,
            subject: 'Ticket 3',
            description: 'Description 3',
            priority: 'high',
            status: 'open',
            createdAt: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(),
            updatedAt: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(),
        },
    ];

    createTicket(createTicketDto: CreateTicketDto) {
        const ticket: Ticket = {
            id: this.tickets.length + 1,
            ...createTicketDto,
            status: 'open',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        this.tickets.push(ticket);

        return {
            status: true,
            statusCode: 201,
            message: 'Ticket created successfully',
            data: ticket,
        };
    }

    getTickets({
        status,
        priority,
        limit = 10,
        page = 1
    }: {
        status?: Ticket['status'];
        priority?: Ticket['priority'];
        limit?: number;
        page?: number;
    } = {
            limit: 10,
            page: 1
        }) {
        let results: Ticket[] = this.tickets;

        if (status) {
            results = [...(results.filter((ticket: Ticket) => ticket.status === status))];
        }
        if (priority) {
            results = [...(results.filter((ticket: Ticket) => ticket.priority === priority))];
        }

        //limit and page
        const skip = (page - 1) * limit;
        results = results.slice(skip, skip + limit);

        return {
            status: true,
            statusCode: 200,
            message: 'Tickets fetched successfully',
            data: results,
        };
    }

    getTicket(id: number) {
        const ticket = this.tickets.find((ticket) => ticket.id === id);

        if (!ticket) {
            throw new NotFoundException('Ticket not found');
        }

        return {
            status: true,
            statusCode: 200,
            message: 'Ticket fetched successfully',
            data: ticket,
        };
    }
}
