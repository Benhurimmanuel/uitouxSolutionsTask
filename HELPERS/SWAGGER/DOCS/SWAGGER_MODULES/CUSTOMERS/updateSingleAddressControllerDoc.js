module.exports = {
    // operation's method
    patch: {
        security: [
            {
                Bearer: [],
            },
        ],
        tags: ['Customer | Profile'], // operation's tag.
        description: 'update customer  address', // operation's desc.
        operationId: 'updateAddressOfACustomer', // unique operation id
        parameters: [{
            name: 'customeraddressid', // name of the param
            in: 'path', // location of the param
            required: true, // Mandatory param
            description: 'customer address id', // param desc.
        }],
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
                                customerAddress: '#665, Ground Floor, 100 Ft Road, Indiranagar, 1st Stage',
                                latitude: 12.222,
                                longitude: 77.445,
                                addressType: 'Other',
                                isPrimaryAddress: true,
                                isDeleted: false,
                                createdAt: '2023-04-06T06:43:21.045Z',
                                updatedAt: '2023-04-06T06:43:21.045Z',
                                customerDetailCustomerDetailId: '793b6b30-0d83-4bf4-b3d4-968138adecd6',
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
