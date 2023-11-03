import React from "react"
import { useState, useEffect, useContext } from 'react'
import { parseQuery, Query } from 'soql-parser-js'
//import GraphiQL from 'GraphiQL'
import soql2graphQL from './soql2graphQL'
import GraphiQL  from '../components/GraphiQL'
import type { Fetcher } from '@graphiql/toolkit'
import 'graphiql/graphiql.min.css'
import converter from '@sf-explorer/soql-to-graphql'


const fetcher: Fetcher = async graphQLParams => {
    const data = await fetch(
        'https://swapi-graphql.netlify.app/.netlify/functions/index',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphQLParams),
            credentials: 'same-origin',
        },
    );
    return data.json().catch(() => data.text())
};

interface DefaultProps {
    q: string
    onResponse?: Function
}


export default function SOQL2GraphQL({
}: DefaultProps) {
    const [query, setQuery] = useState<string>("select Id, Name, (select Name from Opportunities) from Account limit 3")
    const [graphQuery, setGraphQuery] = useState(undefined)
    debugger


    useEffect(() => {
        try {
            
           
            setGraphQuery(converter(query))
        } catch (e: any) {
            console.error(e)
            setGraphQuery(e.message || JSON.stringify(e))
        }
    }, [query])
    /*
     <MonacoEditor
            language="sql"
            value={query}
            height="100px"
            onChange={(value) => setQuery(value)}
            options={{
                theme: 'vs-dark',
            }}
        />
        */

    return (<>
    
        <textarea name="postContent" value={query} onChange={(e) => setQuery(e.target.value)} style={{width: "100%"}}/>


        <GraphiQL query={graphQuery} fetcher={fetcher} />

    </>

    )
}