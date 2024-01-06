module.exports = {
    // operation's method
    get: {
        security: [
            {
                Bearer: [],
            },
        ],

        tags: ['Customer | Review'], // operation's tag
        description: 'getReviewDetailsBasket', // short desc
        operationId: 'getReviewDetailsBasket', // unique operation id
        parameters: [{
            name: 'basketid', // name of the param
            in: 'path', // location of the param
            schema: {
                $ref: '#/components/schemas/basketid', // data model of the param
            },
            required: true, // Mandatory param
            description: 'basketid', // param desc.
        }], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
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
                            payload: [
                                {
                                    "reviewId": "b1902dcd-1838-4564-a0b5-779d1678e67f",
                                    "isDeleted": false,
                                    "starRating": 3,
                                    "reviewDescription": "ahvschab",
                                    "storeDetailsFk": "4be7c969-6133-4c68-9fc9-ea612be98af0",
                                    "customerDetailsFk": "53d2252d-eb42-4489-8733-79ec764081f0",
                                    "updatedAt": "2023-09-01T08:34:10.477Z",
                                    "createdAt": "2023-09-01T08:34:10.477Z",
                                    "productDetailsFk": null,
                                    "serviceDetailsFk": null
                                },
                            ],
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
