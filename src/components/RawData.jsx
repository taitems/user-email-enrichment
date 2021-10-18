import { Box } from '@chakra-ui/layout'
import { prettyPrintJson } from 'pretty-print-json';
import 'pretty-print-json/dist/pretty-print-json.css';
import React from 'react'

export const RawData = ({result}) => {
    const html = {
        __html: prettyPrintJson.toHtml(result)
    };
    return (
        <Box textAlign="left" fontSize={13} lineHeight={1.75}>
        <pre dangerouslySetInnerHTML={html} />
        </Box>
    )
}
