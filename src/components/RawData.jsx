import { Box, Button, useToast } from '@chakra-ui/react'
import Icon from '@chakra-ui/icon';
import { DuplicateIcon } from '@heroicons/react/outline'
import { prettyPrintJson } from 'pretty-print-json';
import 'pretty-print-json/dist/pretty-print-json.css';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import React from 'react'


export const RawData = ({result}) => {
    const toast = useToast();
    const html = {
        __html: prettyPrintJson.toHtml(result)
    };
    return (
        <Box>
            <CopyToClipboard
                text={JSON.stringify(result, null, 2)}
                onCopy={() => {
                    toast({
                        title: `Copied JSON output`,
                        position: 'top',
                        status: 'success',
                        variant: 'subtle',
                        isClosable: true,
                    })
                }}>
            <Button
                type="whiteAlpha"
                size="xs"
                aria-label="Copy output to clipboard"
                leftIcon={<Icon color="gray.400" as={DuplicateIcon} w={4} h={4} />}
                iconSpacing={1}
            >
                Copy
            </Button>
            </CopyToClipboard>
        <Box textAlign="left" fontSize={13} lineHeight={1.75}>
            <pre dangerouslySetInnerHTML={html} />
        </Box>
        </Box>
    )
}
