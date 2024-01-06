module.exports = {
    // operation's method
    get: {

        tags: ['Vendor | Products'], // operation's tag
        description: 'get total worth of products of a company/store', // short desc
        operationId: 'getTotalWorthofProducts', // unique operation id
        // expected responses
        responses: {
            // response code
            200: {
                content: {
                    // content-type
                    'application/json': {
                        // schema: {
                        example: {
                            payload: [
                                {
                                    isOwner: true,
                                    totalProductsWorthOfCompany: 2621221050,
                                    storeDetails: [
                                        {
                                            storeId: '0dd58ca3-f44f-4ee1-a5a9-0ceb542e7161',
                                            storeName: 'RH Electronics',
                                            totalProductsWorth: 2621221000,
                                        },
                                        {
                                            storeId: '21c42379-73f2-49ee-bd79-98f9c7bbb08d',
                                            storeName: 'Hello',
                                            totalProductsWorth: 50,
                                        },
                                    ],
                                },
                            ],
                        },

                    },
                },
                // response code

            },
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
