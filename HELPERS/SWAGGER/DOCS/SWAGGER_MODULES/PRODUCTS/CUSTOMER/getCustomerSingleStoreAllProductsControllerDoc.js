module.exports = {
    // operation's method
    get: {
        security: [
            {
                Bearer: [],
            },
        ],

        tags: ['Customer | Products'], // operation's tag
        description: 'will give Single Store all products ', // short desc
        operationId: 'getCustomerSingleStoreAllProducts', // unique operation id
        parameters: [{
            name: 'storeid', // name of the param
            in: 'path', // location of the param
            schema: {
                $ref: '#/components/schemas/storeid', // data model of the param
            },
            required: true, // Mandatory param
            description: 'store Id', // param desc.
        }], // expected params
        // expected responses
        responses: {
            // response code
            200: {
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: [
                                {
                                    p_name: 'Iphone - Gold',
                                    p_price: 70000,
                                    p_desc: '<p>IPhone with gold plating</p>',
                                    p_id: '82ba0df1-001e-4c70-8506-a2bb98279f22',
                                    o_id: '81559343-c1a9-4d10-8c30-7d016bd4a469',
                                    f_id: '5c463ef2-606a-486b-abc6-c40507c11c06',
                                    s_id: '93883517-5fb7-423b-a8c8-5465d607f549',
                                    o_Expiry_Date: '2022-08-10T05:24:50.000Z',
                                    isproductfavorite: false,
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
