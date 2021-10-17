import { Box } from '@chakra-ui/layout'
import React from 'react'

export const RawData = ({result}) => {
    return (
        <Box textAlign="left">
        <pre>
            {result && JSON.stringify(result, null, 2)}
        </pre>
        </Box>
    )
}
