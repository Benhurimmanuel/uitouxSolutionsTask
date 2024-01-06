module.exports = {
  // method of operation
  post: {
    tags: ['Vendor | Auth'],
    description: 'signup/sign-in with otp for new Vendor',
    operationId: 'createNewVendorsSignup',
    parameters: [],
    requestBody: {
      description: 'send OTP for New Company Registration',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              countryCode: 91,
              phoneNumber: '1234567890',
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OTP sent to Vendor',
        content: {
          'application/json': {
            example: {
              payload: 'OTP sent Successfully',
            },
          },
        },
      },
      400: {
        description: 'UNSUCCESSFUL ',
        content: {
          'application/json': {
            example: {
              payload: 'Unable to process right now, please try again later',
            },
          },
        },
      },
      403: {
        description: 'Country not served ',
        content: {
          'application/json': {
            example: {
              payload: 'Sorry We dont serve in this country code',
            },
          },
        },
      },
    },
  },
};
