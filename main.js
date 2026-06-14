// Crack Locket Gold by KimiZK
let body = JSON.parse($response.body);
body.subscriber.entitlements.Gold = {
  grace_period_expires_date: null,
  purchase_date: "2024-01-01T00:00:00Z",
  product_identifier: "com.kimizk.locket.gold",
  expires_date: "2099-12-31T23:59:59Z"
};
body.subscriber.subscriptions["com.kimizk.locket.gold"] = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  period_type: "normal",
  expires_date: "2099-12-31T23:59:59Z",
  original_purchase_date: "2024-01-01T00:00:00Z",
  purchase_date: "2024-01-01T00:00:00Z",
  store: "app_store"
};
body.Attention = "Cracked by KimiZK !!!";
$done({body: JSON.stringify(body)});
