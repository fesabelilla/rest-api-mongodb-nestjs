import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { createBookDto } from './dto/create.book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAll()
    }

    @Post()
    async createBook(
        @Body()
        book: createBookDto
    ): Promise<Book> {
        return this.bookService.create(book)
    }

    @Get(':id')
    async getBookById(
        @Param('id')
        id: string
    ): Promise<Book> {
        return this.bookService.findById(id)
    }
}
