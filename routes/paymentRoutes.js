const Razorpay = require("razorpay");
const shortid = require("shortid");
const keys = require("../config/keys.js");
const path = require("path");

var razorpay = new Razorpay({
  key_id: keys.razorpayID,
  key_secret: keys.razorpaySecret,
});

module.exports = (app) => {
  app.get("/api/logo.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets", "logo.jpg"));
    console.log(path.join(__dirname, "../assets", "logo.jpg"));
  });

  app.post("/api/razorpay_verification", (req, res) => {
    const SECRET = keys.razorpayVerificationSecret;

    const crypto = require("crypto");
    const shasum = crypto.createHmac("sha256", SECRET);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    console.log(digest, req.headers["x-razorpay-signature"]);

    if (digest === req.headers["x-razorpay-signature"]) {
      console.log("request is legit");
      // process it
    } else {
      //   dont process it
    }

    // Response is necessary
    res.json({ status: "ok" });
  });

  app.post("/api/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 5;
    const currency = "INR";

    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  });
};
