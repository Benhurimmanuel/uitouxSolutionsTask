module.exports = {
    // method of operation
    post: {
        tags: ['Customer | Auth'], // operation's tag.
        description: 'signup/sign-in with otp for customer', // operation's desc.
        operationId: 'CustomerVerifyOTPAuth', // unique operation id.
        parameters: [], // expected params.
        // expected responses
        requestBody: {
            description: 'verify OTP, give otpCode as string as if the code starts from 0, it is throwing error in postman',
            // expected request body
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            countryCode: 91,
                            phoneNumber: 797989789,
                            otpCode: '903596',
                        },
                    },
                },
            },
        },
        responses: {
            // response code
            201: {
                description: 'customer registered', // response desc.
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
            200: {
                description: 'customer already present', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: 'eyJhbGciOiJIUzILWIwMDhjNDBjNTZlMi1haWwuY29tIiwiYWNjb3VudFR5aWF0IjoxNjQ4NjMwMTk4LCJleHAiOjE2NDg3MTY1OTh9.Yt7kAT91CPkjiDESNZac-TxX-iIJmBzDg3hqeJ7_clQ',
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
        },
    },
};
