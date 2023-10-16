
function getWhereOperator(cond: any): string {
    switch (cond.operator) {
        case '=':
            return 'eq'
        case '!=':
            return 'neq'
        case 'like':
            return 'like'
        case 'IN':
            return 'in'
        default:
            return 'eq'
    }

}

function getWhereField(cond: any) {
    const value = Array.isArray(cond.value) ? JSON.stringify(cond.value) : JSON.stringify(cond.value)

    return `${cond.field}: { ${getWhereOperator(cond)} : ${value?.replaceAll("'", "")} }  `
}

function getField(field: any): string {
    const { type, ...rawField } = field
    if (type === "FieldRelationship") {

        return (
            `                    ${field.relationships[0]} {
                        ${getField(rawField)}
                    }`
        )
    }
    if (field.field) {
        if (field.field.endsWith("Id")) {
            return field.field
        }
        return (
            `                    ${field.field} {
                        value
                    }`
        )
    }
    if (field.functionName?.toLowerCase() === 'tolabel' && field.parameters) {
        return (
            `                    ${field.parameters[0]} {
                        display
                    }`
        )
    }

    if (field.type === "FieldSubquery") {
        return getQuery(field.subquery)
    }

}

function getWhereClause(parsedQuery: any) {
    if (!parsedQuery.where && parsedQuery.limit) return `(first: ${parsedQuery.limit})`

    if (!parsedQuery.where) return ''

    return `(${parsedQuery.limit ? `first: ${parsedQuery.limit},` : ''}
        where: { ${getWhereField(parsedQuery.where.left)} }
        ) `

}

function getQuery(parsedQuery: any) {

    return ` ${parsedQuery.sObject || parsedQuery.relationshipName} ${getWhereClause(parsedQuery)} {
        edges {
          node {
${parsedQuery.fields?.map(getField).join('\n')}
          }
        }
      }`

}


export default function (parsedQuery: any): string {
    return `query ${parsedQuery.sObject}s {
        uiapi {
          query {
            ${getQuery(parsedQuery)}
          }
        }
      }`
}