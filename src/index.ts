import { config } from 'dotenv' //environment variables (stripe API key)
if (process.env.NODE_ENV !== 'production') {
    config();
}