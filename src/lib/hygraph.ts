import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://us-west-2.cdn.hygraph.com/content/cmdfjaid501sj07uob1qhh5si/master"

const client = new GraphQLClient(endpoint)

interface Content {
text: string;
}

interface UserText {
id: string;
favorite: boolean;
title: string;
createdAt: string;
slug: string;
content: Content;
}

interface HygraphQueryResult {
files: UserText[];
}

export async function getUserText() {

    const query = gql`
        query MyQuery {
            files {
                content {
                    text
                }
                id
                favorite
                createdAt
                slug
                title
            }
        }
    `

    const data = await client.request<HygraphQueryResult>(query);
    return data
}