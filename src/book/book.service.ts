import { Injectable } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {

    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ){}

    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find()
        return books
    }

    async create(book : Book): Promise<Book> {
        const res = await this.bookModel.create(book)
        return res
    }

    async findById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id)
        return book
    }
}
