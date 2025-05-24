import Coingecko from 'coingecko-typescript';
import 'dotenv/config';

const { PRO_API_KEY, DEMO_API_KEY } = process.env;

if (!PRO_API_KEY && !DEMO_API_KEY) {
  console.error('Please set your API key in the .env file');
  process.exit(1);
}

const client = new Coingecko({
  proAPIKey: PRO_API_KEY,
  // demoAPIKey: DEMO_API_KEY,
  // environment: 'demo',
});

async function main() {
  const response = await client.simple.price.get({
    vs_currencies: 'usd',
    ids: 'bitcoin',
  });

  console.log(JSON.stringify(response, null, 2));
}

main();
