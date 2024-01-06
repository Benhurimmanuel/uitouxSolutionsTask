module.exports = {
    // operation's method
    get: {
        security: [
            {
                Bearer: [],
            },
        ],
        tags: ['Customer | Profile'], // operation's tag.
        description: 'Get single customer Details', // operation's desc.
        operationId: 'getSingleCustomer', // unique operation id
        parameters: [],
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
                                customerDetailId: '22678e98-4eaf-47ee-a5fd-6dd62db49e28',
                                firstName: 'John',
                                lastName: 'Doe',
                                profilePictureUrl: 'https://lh3.googleusercontent.com/a/AATXAJx3qPzIMdxsdsFp3HZQ7jCvWHABdrmY5O_5owIDJwZ=s96-c',
                                auth_type: 'google',
                                isProfileCompleted: false,
                                isDeleted: false,
                                createdAt: '2022-06-01T05:39:09.605Z',
                                updatedAt: '2022-06-01T05:39:09.605Z',
                                customerRegistrationCustomerRegistrationId: 'f999d946-f180-44fc-a582-c5d78de756a6',
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
