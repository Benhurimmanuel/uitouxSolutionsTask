module.exports = {
    // operation's method
    post: {
        security: [
            {
                Bearer: [],
            },
        ],

        tags: ['Customer | Review'], // operation's tag
        description: 'add review images', // short desc
        operationId: 'addReviewImages', // unique operation id
        parameters: [{
            name: 'reviewid', // name of the param
            in: 'path', // location of the param
            schema: {
                $ref: '#/components/schemas/reviewid', // data model of the param
            },
            required: true, // Mandatory param
            description: 'reviewid', // param desc.
        }], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/reviewImages',
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                content: {
                    // content-type
                    'application/json': {
                        example:
                        {
                            payload: {
                            },
                        },
                    },
                },
            },
            // response code
            400: {
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/400', // todo data model
                        },
                    },
                },
            },
        },
    },
};
