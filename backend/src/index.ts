import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import {BookResolver} from "./resolvers/BookResolver";

async function main() {
    const connection = await createConnection();
    const schema = await buildSchema({
        resolvers: [BookResolver],
    });
    const server = new ApolloServer({ schema });
    await server.listen(4000);
    console.log("server has started!");
}

main();