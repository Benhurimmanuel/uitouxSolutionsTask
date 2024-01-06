module.exports = {
  // method of operation
  post: {
    tags: ['Vendor | Auth'], // operation's tag.
    description: 'signup/sign-in with otp for vendor', // operation's desc.
    operationId: 'newVendorVerifyOTP', // unique operation id.
    parameters: [], // expected params.
    // expected responses
    requestBody: {
      description:
        'verify OTP, give otpCode as string as if the code starts from 0, it is throwing error in postman',
      // expected request body
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              countryCode: 91,
              phoneNumber: '12345678890',
              otpCode: '903596',
            },
          },
        },
      },
    },
    responses: {
      // response code
      200: {
        description: 'Vendor Registered', // response desc.
        content: {
          // content-type
          'application/json': {
            example: {
              payload: 'OTP Sent Successfully',
            },
          },
        },
      },
      403: {
        description: 'Country not served ', // response desc.
        content: {
          // content-type
          'application/json': {
            example: {
              payload: 'Country Not Served',
            },
          },
        },
      },
    },
  },
};
