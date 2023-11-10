import React from "react"
import { useState, useEffect, useContext } from 'react'
import { parseQuery, Query } from 'soql-parser-js'
//import GraphiQL from 'GraphiQL'
//import soql2graphQL from './soql2graphQL'
import GraphiQL from '../components/GraphiQL'
import type { Fetcher } from '@graphiql/toolkit'
import 'graphiql/graphiql.min.css'
import converter from '@sf-explorer/soql-to-graphql'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-sql"

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
    const [query, setQuery] = useState<string>(`select Id, Name, (select Name from Opportunities) 
    from Account 
        where Name like ':criteria' 
        order by CreationDate
        limit 3`)
    const [variables, setVariables] = useState<string>(`{
    "criteria":"String=\\\"%\\\""
}`)
    const [graphQuery, setGraphQuery] = useState(undefined)

    useEffect(() => {
        try {

            const vars = JSON.parse(variables)
            setGraphQuery(converter(query, vars))

        } catch (e: any) {
            console.error(e)
            setGraphQuery(e.message || JSON.stringify(e))
        }
    }, [query, variables])
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

        <h4>Variables</h4>
        <AceEditor
            mode='json'
            theme='github'
            value={variables}
            width='100%'
            onChange={e => setVariables(e)}
            height='70px'
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                useWorker: false,
            }}
        />

        <h4>Query</h4>
        <AceEditor
            mode='sql'
            theme='github'
            value={query}
            width='100%'
            onChange={e => setQuery(e)}
            height='100px'
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                useWorker: false,
            }}
        />
       


        <div style={{ height: "700px" }}>
            <GraphiQL query={graphQuery} fetcher={fetcher} variables={variables} />
        </div>


    </>

    )
}