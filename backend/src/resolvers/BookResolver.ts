import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Book } from "../models/Book";
import { CreateBookInput } from "../inputs/CreateBookInput";

@Resolver()
export class BookResolver {
    @Query(() => String)
    hello() {
        return "hi!";
    }

    @Query(() => [Book])
    books() {
        return Book.find();
    }

    @Mutation(() => Book)
    async createBook(@Arg("data") data: CreateBookInput) {
        const book = Book.create(data);
        await book.save();
        return book;
    }
}