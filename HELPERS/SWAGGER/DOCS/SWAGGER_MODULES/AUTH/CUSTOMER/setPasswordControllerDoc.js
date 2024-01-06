module.exports = {
    // operation's method
    patch: {

        tags: ['Vendor | Auth'], // operation's tag
        description: 'set password for employee', // short desc
        operationId: 'setPassword', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            password: {
                                type: 'string',
                                example: 'test123',
                                description: 'password',
                            },
                        },
                    },
                },
            },
        },
        // expected responses
        responses: {
            200: {
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJlOGVkN2JlLTY5YmQtNDg3Ni05OWExLWZkNzRhNDFkYmNlNCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY1MjE1NTA0NSwiZXhwIjoxNjUyMTc2NjQ1fQ.PB64Ntn3AGMDGaQdoak74H_NIh3QoMVLyUyArqDpT9U',
                                userDetails: {
                                    email: 'test@test.com',
                                },
                            },
                        },
                    },
                },
            },
            400: {
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/400',
                        },
                    },
                },
            },
            401: {
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/401',
                        },
                    },
                },
            },
        },
    },
};
