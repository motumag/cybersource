const dotenv = require("dotenv");

dotenv.load();

exports.CORS_ALLOWED_HOSTS = ["127.0.0.1", "0.0.0.0", "localhost", "http://localhost:3001"];
exports.cybersource = {
  ACCESS_KEY: "dc3e6129cb7736e58be5297ddec0bd4d",
  ORG_ID: "aby_0507_fastpay",
  PROFILE_ID: "ECFAA73F-5F10-4CD0-A699-D83E4A968465",
  SECRET_KEY:
    "c5f0c7b9c4d749d382683766df24d09f3726476033144249a9c65f155eb6fa698a009c74b2b640229c08401a243b7bced4b7d33bd71740ccb81b38d181744e234a100ded86544001a382c3756a0d1f5af6ae2c0e1bfa46a0a493230f0e0cfe52a33f75c92c4a4fddb27b2696a8b7d075910c24e681bf4ca2acdc9ce08a1470bd",
};
