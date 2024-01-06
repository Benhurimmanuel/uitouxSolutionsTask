module.exports = {
    // operation's method
    post: {
        security: [
            {
                Bearer: [],
            },
        ],
        tags: ['Customer | Profile'], // operation's tag.
        description: 'add single customer Detail', // operation's desc.
        operationId: 'addSingleCustomerDetails', // unique operation id
        parameters: [],
        requestBody: {
            description: 'contains only data that needs to be addedd',
            // expected request body
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/customers',
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: 'customer available', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                customerAddressId: 'db93d3c4-a37a-4339-a0a8-15973adc93de',
                                isDeleted: false,
                                customerAddress: '#665, Ground Floor, 100 Ft Road, Indiranagar, 1st Stage',
                                latitude: 12.222,
                                longitude: 77.445,
                                addressType: 'Other',
                                isPrimaryAddress: true,
                                customerDetailCustomerDetailId: '793b6b30-0d83-4bf4-b3d4-968138adecd6',
                                updatedAt: '2023-04-06T06:43:21.045Z',
                                createdAt: '2023-04-06T06:43:21.045Z',
                            },
                        },
                    },
                },
            },
            // response code
            404: {
                description: 'user is not found', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/400', // error data model
                        },
                    },
                },
            },
        },
    },
};
