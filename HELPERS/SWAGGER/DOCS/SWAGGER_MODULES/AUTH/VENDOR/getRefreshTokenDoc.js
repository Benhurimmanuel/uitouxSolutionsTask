module.exports = {
    // method of operation
    get: {
        tags: ['Vendor | Auth'], // operation's tag.
        description: 'RefreshToken for vendor', // operation's desc.
        operationId: 'VendorRefreshToken', // unique operation id.
        parameters: [], // expected params.
        // expected responses
        requestBody: {
            description: 'get Refresh token for otp sigin',
            // expected request body
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NjY2YWQ3LTMxYTYtNGY1My05ZWVkLTQ2Y2ZlYjY5OTIwNCIsImVtYWlsIjpudWxsLCJwaG9uZU51bWJlciI6Iis5MTg0MzE5NTA1ODIiLCJhY2NvdW50VHlwZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjYxMzIxMzY4LCJleHAiOjE2Nzg2MDEzNjh9.WrSlMqIATCtGc7659va7TleNRDiaVxE992mNrFpf7Wo',
                            employeeId: '36666ad7-31a6-4f53-9eed-46cfeb699204',
                        },
                    },
                },
            },
        },
        responses: {
            // response code
            200: {
                description: 'refresh token will be served', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                token: 'eyJhbGciOiJIUzILWIwMDhjNDBjNTZlMi1haWwuY29tIiwiYWNjb3VudFR5aWF0IjoxNjQ4NjMwMTk4LCJleHAiOjE2NDg3MTY1OTh9.Yt7kAT91CPkjiDESNZac-TxX-iIJmBzDg3hqeJ7_clQ',
                            },
                        },
                    },
                },
            },
            400: {
                description: 'Requested file was not found ', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/400', // Todo model
                        },
                    },
                },
            },
            401: {
                description: 'UnAuthorized Access ', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: 'Sorry, Looks like you dont have the required authorization',

                    },
                },
            },
        },
    },
};
