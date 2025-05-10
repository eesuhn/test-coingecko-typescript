import Coingecko from 'coingecko';
import 'dotenv/config';

const { PRO_API_KEY, DEMO_API_KEY } = process.env;

if (!PRO_API_KEY || !DEMO_API_KEY) {
  console.error('Please set your API key in the .env file');
  process.exit(1);
}

const client = new Coingecko({
  proAPIKey: PRO_API_KEY,
  // demoAPIKey: DEMO_API_KEY,
  // environment: 'demo',
});

async function price() {
  const response = await client.simple.getPrice({
    vs_currencies: 'usd',
    ids: 'bitcoin',
  });
  console.log(JSON.stringify(response, null, 2));
}

async function tokenPrice() {
  const response = await client.onchain.simple.networks.getTokenPrice(
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    {
      network: 'eth',
      include_market_cap: true,
    }
  );
  console.log(JSON.stringify(response, null, 2));
}

price();
tokenPrice();
