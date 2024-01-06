module.exports = {
  // method of operation
  post: {
    tags: ['Vendor | Auth'], // operation's tag.
    description: 'signup/sign-in with otp for vendor', // operation's desc.
    operationId: 'VendorsSignIn', // unique operation id.
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
              FCMToken: 'ahsvchyavshcvajhgvcsvahgjvajhb',
            },
          },
        },
      },
    },
    responses: {
      // response code
      200: {
        description: 'customer registered', // response desc.
        content: {
          // content-type
          'application/json': {
            example: {
              payload: {
                accessToken:
                  'eyJhbGciOiJIUzILWIwMDhjNDBjNTZlMi1haWwuY29tIiwiYWNjb3VudFR5aWF0IjoxNjQ4NjMwMTk4LCJleHAiOjE2NDg3MTY1OTh9.Yt7kAT91CPkjiDESNZac-TxX-iIJmBzDg3hqeJ7_clQ',
                extraData: {
                  companyApprovalStatus: 1,
                  isEmailVerified: true,
                },
              },
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
        description: 'NOT FOUND ',
        content: {
          'application/json': {
            example: {
              payload: 'Data Not Found',
            },
          },
        },
      },
    },
  },
};
