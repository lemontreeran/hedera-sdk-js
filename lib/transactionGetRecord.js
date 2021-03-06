const Query = require('./query');
const TransactionID = require('./transactionId');

class TransactionGetRecord extends Query {
  constructor(options) {
    super(options);

    let transactionID = options.transactionId;
    if (typeof options.transactionId === 'string') {
      transactionID = TransactionID.parseString(options.transactionId);
    }

    this.query = {
      transactionGetRecord: {
        transactionID,
        header: {
          responseType: options.responseType || this.ResponseType.ANSWER_ONLY,
        },
      },
    };
  }

  static handleResponse(response) {
    const res = super.handleResponse(response);
    return res.transactionGetRecord;
  }
}

module.exports = TransactionGetRecord;
