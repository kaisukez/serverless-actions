'use strict';
const Lambda = require('./lambda');

// Lambda for create.
module.exports.onCreateCustomer = (event, context, callback) => Lambda.Customers.onCreateCustomer(event, context, callback);
module.exports.onCreateOrder = (event, context, callback) => Lambda.Orders.onCreateOrder(event, context, callback);
module.exports.onCreateProduct = (event, context, callback) => Lambda.Products.onCreateProduct(event, context, callback);

// Lambda for list all data.
module.exports.onListCustomer = (event, context, callback) => Lambda.Customers.onListCustomer(event, context, callback);
module.exports.onListOrder = (event, context, callback) => Lambda.Orders.onListOrder(event, context, callback);
module.exports.onListProduct = (event, context, callback) => Lambda.Products.onListProduct(event, context, callback);

// Lambda for get data.
module.exports.onGetCustomer = (event, context, callback) => Lambda.Customers.onGetCustomer(event, context, callback);
module.exports.onGetOrder = (event, context, callback) => Lambda.Orders.onGetOrder(event, context, callback);
module.exports.onGetProduct = (event, context, callback) => Lambda.Products.onGetProduct(event, context, callback);

// Lambda for update data.

// Lambda for delete data.
module.exports.onDeleteCustomer = (event, context, callback) => Lambda.Customers.onDeleteCustomer(event, context, callback);
