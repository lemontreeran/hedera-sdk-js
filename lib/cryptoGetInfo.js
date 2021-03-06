const Query = require('./query');
const AccountID = require('./accountId');

class CryptoGetInfo extends Query {
  constructor(options) {
    super(options);

    this.query = {
      cryptoGetInfo: {
        accountID: new AccountID(options.queryAccountId).toObject(),
        header: {
          responseType: options.responseType || this.ResponseType.ANSWER_ONLY,
        },
      },
    };
  }

  static handleResponse(response) {
    const res = super.handleResponse(response);
    return res.cryptoGetInfo;
  }
}

module.exports = CryptoGetInfo;
