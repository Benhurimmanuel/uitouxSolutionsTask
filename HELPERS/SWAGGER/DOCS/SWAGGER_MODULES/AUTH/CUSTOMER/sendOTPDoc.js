module.exports = {
    // method of operation
    post: {
        tags: ['Customer | Auth'], // operation's tag.
        description: 'signup/sign-in with otp for customer', // operation's desc.
        operationId: 'CustomerSendOTPAuth', // unique operation id.
        parameters: [], // expected params.
        // expected responses
        requestBody: {
            description: 'send Customer signup OTP',
            // expected request body
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            countryCode: 91,
                            phoneNumber: 797989789,
                        },
                    },
                },
            },
        },
        responses: {
            // response code
            200: {
                description: 'otp sent to customer', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: 'OTP sent Successfully',
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
