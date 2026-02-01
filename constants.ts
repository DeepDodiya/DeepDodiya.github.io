
import { Company, CardType } from './types';

export const INITIAL_CASH = 800000;
export const MAX_ACTIONS_PER_TURN = 3;
export const DEFAULT_SESSIONS = 10;

export const TRADE_BLOCK_SIZE = 500; // Trades must be in multiples of 500
export const CHAIRMAN_THRESHOLD = 50000; // > 50k shares to be eligible for Chairman
export const DIRECTOR_THRESHOLD = 100000; // First to 100k shares becomes Director permanently
export const MAX_SHARES_PER_COMPANY = 200000;

export const INITIAL_COMPANIES: Company[] = [
  { id: 'c1', name: 'Tata Motors', symbol: 'TATA', price: 50, previousPrice: 50, volatility: 'Medium', color: 'text-blue-400', totalShares: MAX_SHARES_PER_COMPANY },
  { id: 'c2', name: 'SBI', symbol: 'SBI', price: 60, previousPrice: 60, volatility: 'Low', color: 'text-cyan-400', totalShares: MAX_SHARES_PER_COMPANY },
  { id: 'c3', name: 'Bajaj Finserv', symbol: 'BAJAJ', price: 80, previousPrice: 80, volatility: 'High', color: 'text-yellow-400', totalShares: MAX_SHARES_PER_COMPANY },
  { id: 'c4', name: 'Infosys', symbol: 'INFY', price: 100, previousPrice: 100, volatility: 'Medium', color: 'text-green-400', totalShares: MAX_SHARES_PER_COMPANY },
  { id: 'c5', name: 'Adani', symbol: 'ADANI', price: 120, previousPrice: 120, volatility: 'High', color: 'text-red-400', totalShares: MAX_SHARES_PER_COMPANY },
  { id: 'c6', name: 'Reliance Ind.', symbol: 'RIL', price: 130, previousPrice: 130, volatility: 'Medium', color: 'text-purple-400', totalShares: MAX_SHARES_PER_COMPANY },
  { id: 'c7', name: 'Nifty', symbol: 'NIFTY', price: 150, previousPrice: 150, volatility: 'Medium', color: 'text-orange-400', totalShares: MAX_SHARES_PER_COMPANY },
];

export const MIN_PRICE = 0;

export const CARD_DEFINITIONS: Record<CardType, { label: string; description: string }> = {
    [CardType.DIVIDEND_10]: { label: 'Dividend ₹10', description: 'Get ₹10 per share held in one company.' },
    [CardType.DIVIDEND_20]: { label: 'Dividend ₹20', description: 'Get ₹20 per share held in one company.' },
    [CardType.LOAN_1L]: { label: 'Loan ₹1L', description: 'Get ₹1,00,000 cash from bank.' },
    [CardType.LOAN_5L]: { label: 'Loan ₹5L', description: 'Get ₹5,00,000 cash from bank.' },
    [CardType.BONUS_SHARE]: { label: 'Bonus Share (1:5)', description: 'Get 1 free share for every 5 held.' },
    [CardType.RIGHT_ISSUE]: { label: 'Rights Issue (1:2)', description: 'Buy 1 share for every 2 held at ₹10.' },
    [CardType.FRAUD]: { label: 'Fraud (Buy -50%)', description: 'Buy shares at 50% discount.' },
    [CardType.BUYBACK]: { label: 'Buyback (Sell +10%)', description: 'Sell shares at 10% premium.' },
    [CardType.SPLIT_3]: { label: 'Split (3 Addtl)', description: 'Global Split. 3 new shares for 1 held. Price -50%.' },
    [CardType.SPLIT_5]: { label: 'Split (5 Addtl)', description: 'Global Split. 5 new shares for 1 held. Price -50%.' },
    [CardType.CIRCUIT_BUYER]: { label: 'Buyer Circuit +10%', description: 'Use at Session End. Caps price increase.' },
    [CardType.CIRCUIT_SELLER]: { label: 'Seller Circuit -10%', description: 'Use at Session End. Caps price decrease.' },
};