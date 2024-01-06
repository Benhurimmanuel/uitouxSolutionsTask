module.exports = {
    // method of operation
    post: {
        tags: ['Customer | Auth'], // operation's tag.
        description: 'signup/sign-in with google for customer', // operation's desc.
        operationId: 'CustomerFacebookAuth', // unique operation id.
        parameters: [], // expected params.
        // expected responses
        requestBody: {
            description: 'facebook user signup/signin',
            // expected request body
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            tokenId: {
                                type: 'string', // data type
                                description: 'token from facebook', // desc
                            },
                            referenceCode: {
                                type: 'string', // data type
                                description: 'optional referal code', // desc
                            },
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
                                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjMGE5NjUwLTcwOWMtNDhhYS04Zjg1LTg0ZDc5ZDBhOWY5NCIsImVtYWlsIjoiZGhhdmFsdmVlcmFAZ21haWwuY29tIiwiYWNjb3VudFR5cGUiOiJjdXN0b21lciIsImlhdCI6MTY1NDU5MTk3NCwiZXhwIjoxNjU0Njc4Mzc0fQ.gEe7ugxQ2LWwM032WCenfhNWiaYWwHvfH90HR6Tvekk',
                                userId: '1c0a9650-709c-48aa-8f85-84d79d0a9f94',
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
                            payload: {
                                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjMGE5NjUwLTcwOWMtNDhhYS04Zjg1LTg0ZDc5ZDBhOWY5NCIsImVtYWlsIjoiZGhhdmFsdmVlcmFAZ21haWwuY29tIiwiYWNjb3VudFR5cGUiOiJjdXN0b21lciIsImlhdCI6MTY1NDU5MTk3NCwiZXhwIjoxNjU0Njc4Mzc0fQ.gEe7ugxQ2LWwM032WCenfhNWiaYWwHvfH90HR6Tvekk',
                                userId: '1c0a9650-709c-48aa-8f85-84d79d0a9f94',
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
        },
    },
};

// module.exports = {
//     // operation's method
//     patch: {
// tags: ['users'], // operation's tag.
// description: 'signup/sign-in user', // operation's desc.
// operationId: 'userAuth', // unique operation id.
//         parameters: [],
//         requestBody: {
//             description: 'contains only data that needs to be updated',
//             // expected request body
//             required: true,
//             content: {
//                 'application/json': {
//                     schema: {
//                         type: 'object',
//                         properties: {
//                             firstName: {
//                                 type: 'string', // data type
//                                 description: 'firstName of the User', // desc
//                                 allowNull: false, // field cannot be empty
//                                 example: 'John', // example of an firstName
//                             },
//                             LastName: {
//                                 type: 'string', // data type
//                                 description: 'LastName of the User', // desc
//                                 example: 'John', // example of an LastName
//                             },
//                             phoneNumber: {
//                                 type: 'string', // data type
//                                 description: 'phone Number of the User', // desc
//                                 example: 'John', // phone number for the user
//                             },
//                             email: {
//                                 type: 'string', // data type
//                                 description: 'email of the User', // desc
//                                 example: 'John@domainname.domain', // email of the user
//                             },
//                             profilePictureUrl: {
//                                 type: 'string', // data type
//                                 description: 'picture url', // desc
//                                 example: 'http://s3.amazonaws.com/[bucket_name]/ http://[bucket_name].s3.amazonaws.com/', // example of amazon s3 url
//                             },

//                             isProfileCompleted: {
//                                 type: 'boolean', // data type
//                                 description: 'boolean value if profile is completed for the user', // desc
//                                 default: false, // default value

//                             },

//                         },
//                     },
//                 },
//             },
//         },
//         // expected responses
//         responses: {
//             // response code
//             200: {
//                 description: 'user available', // response desc.
//                 content: {
//                     // content-type
//                     'application/json': {
//                         schema: {
//                             $ref: '#/components/schemas/users', // users data model
//                         },
//                     },
//                 },
//             },
//             // response code
//             404: {
//                 description: 'user is not found', // response desc.
//                 content: {
//                     // content-type
//                     'application/json': {
//                         schema: {
//                             $ref: '#/components/schemas/Error', // error data model
//                         },
//                     },
//                 },
//             },
//         },
//     },
// };
