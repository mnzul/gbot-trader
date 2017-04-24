(function(){var t,e,n;t=require("./conf"),e=require("btce-deal"),n=function(){function n(){}return n.displayName="API",n.prototype,n.prototype.btcePublic=new e.Public(t.host),n.prototype.btceTrade=new e.Trade(t.key,t.secret,t.host),n.prototype.getTrades=function(t,e,n){return this.btcePublic.getTrades(t,e).then(function(t){return n(null,t)}).catch(function(t){return n(t)})},n.prototype.getInfo=function(t){return this.btcePublic.getInfo().then(function(e){return t(null,e)}).catch(function(e){return t(e)})},n.prototype.getTicker=function(t,e){return this.btcePublic.getTicker(t).then(function(t){return e(null,t)}).catch(function(t){return e(t)})},n.prototype.ordersRequest=function(t,e){return this.btceTrade.getActiveOrders(t).then(function(t){return e(null,t)}).catch(function(t){return e(t)})},n.prototype.balanceRequest=function(t,e){return this.btceTrade.getInfo().then(function(n){return e(null,n.funds[t.name],n.funds[t.nameTwo])}).catch(function(t){return e(t)})},n.prototype.tradeSetOrder=function(t,e,n,r,u){return this.btceTrade.trade({pair:t,type:e,rate:n,amount:r}).then(function(t){return u(null,t)}).catch(function(t){return u(t)})},n.prototype.tradeCancelOrder=function(t,e){return this.btceTrade.cancelOrder(t).then(function(t){return e(null,t)}).catch(function(t){return e(t)})},n.prototype.tradeGetHistory=function(t,e,n){return this.btceTrade.getTradeHistory({pair:t,count:e}).then(function(t){return n(null,t)}).catch(function(t){return n(t)})},n.prototype.setNonce=function(t){this.btceTrade.nonce=t},n}(),module.exports=n}).call(this);