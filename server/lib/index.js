"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
const dotenv_1 = require("dotenv"); //environment variables (stripe API key)
if (process.env.NODE_ENV !== 'production') {
    (0, dotenv_1.config)();
}
const stripe_1 = __importDefault(require("stripe")); //initialize stripe
exports.stripe = new stripe_1.default(process.env.Stripe_Secret, {
    apiVersion: '2020-08-27',
});
const api_1 = require("./api"); //start the API with ExpressJS 
const port = process.env.PORT || 3000;
api_1.app.listen(port, () => console.log(`API available on http://localhost:${port}`));
//# sourceMappingURL=index.js.map