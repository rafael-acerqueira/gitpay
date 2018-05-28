const models = require('../../loading/loading');
const Promise = require('bluebird');

module.exports = Promise.method(function orderExists(orderAttributes) {

  return models.Order
    .findOne({
      where: {
        id: orderAttributes.id
      }
    }).then((order) => {
      if (!order) return false;
      return order;
    }).catch((error) => {
      console.log(error);
      throw error;
    });

});

