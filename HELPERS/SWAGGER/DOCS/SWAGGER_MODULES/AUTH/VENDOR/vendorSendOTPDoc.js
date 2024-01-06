module.exports = {
  // method of operation
  post: {
    tags: ['Vendor | Auth'], // operation's tag.
    description: 'signup/sign-in with otp for Vendor', // operation's desc.
    operationId: 'createVendorsSignup', // unique operation id.
    parameters: [], // expected params.
    // expected responses
    requestBody: {
      description: 'send Vendor signup OTP',
      // expected request body
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
      // response code
      200: {
        description: 'OTP sent to Vendor', // response desc.
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
        description: 'Country not served | Invalid Otp ',
        content: {
          'application/json': {
            example: {
              oneOf: [
                { payload: 'You have entered invalid OTP, please check your OTP' },
                { payload: 'Sorry We dont serve in this country code' },
              ],
            },

          },
        },
      },
      404: {
        description: 'Vendor Not Found ', // response desc.
        content: {
          // content-type
          'application/json': {
            example: {
              payload: 'No data found',
            },
          },
        },
      },
    },
  },
};
