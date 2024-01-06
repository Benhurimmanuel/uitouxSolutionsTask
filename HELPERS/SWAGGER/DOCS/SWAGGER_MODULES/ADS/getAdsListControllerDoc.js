module.exports = {
    // operation's method
    get: {
        tags: ['Ads'], // operation's tag
        description: 'Gives Ads as a list', // short desc
        operationId: 'getAdsList', // unique operation id
        parameters: [], // expected params
        // expected responses
        responses: {
            // response code
            200: {
                description: 'Successfull response, gives all ads as a array list',
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            type: 'array',
                            example: {
                                payload: [
                                    {
                                        adsId: '0f5e50be-1d49-4ca4-bd06-c3b25bf1dfc1',
                                        imageUrl: 'https://images.unsplash.com/photo-1533069027836-fa937181a8ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                                        pageLink: 'string',
                                        deviceType: 'web',
                                        isAdLive: true,
                                        isDeleted: false,
                                        createdAt: '2022-07-15T12:59:36.684Z',
                                        updatedAt: '2022-07-15T12:59:36.684Z',
                                    },
                                    {
                                        adsId: '66313fc4-a85f-49ff-850b-092f3fadbba3',
                                        imageUrl: 'https://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                                        pageLink: 'string',
                                        deviceType: 'web',
                                        isAdLive: true,
                                        isDeleted: false,
                                        createdAt: '2022-07-15T12:53:24.152Z',
                                        updatedAt: '2022-07-15T12:53:24.152Z',
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            // response code
            400: {
                description: 'ads could not be served', // response desc
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
