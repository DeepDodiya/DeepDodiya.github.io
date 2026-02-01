
export type CompanyId = string;
export type PlayerId = string;

export interface Company {
  id: CompanyId;
  name: string;
  symbol: string;
  price: number;
  previousPrice: number; // To track session changes
  volatility: 'Low' | 'Medium' | 'High';
  color: string;
  totalShares: number; // Max 200,000
}

export interface PortfolioItem {
  companyId: CompanyId;
  quantity: number;
  averageBuyPrice: number;
}

export interface Player {
  id: PlayerId;
  name: string;
  cash: number;
  holdings: Record<CompanyId, PortfolioItem>;
  isBankrupt: boolean;
}

export interface LogEntry {
  id: string;
  timestamp: number;
  message: string;
  type: 'INFO' | 'TRANSACTION' | 'MARKET' | 'ERROR';
}

export type GamePhase = 'SETUP' | 'PLAYING' | 'SESSION_RECONCILIATION' | 'SESSION_SUMMARY' | 'GAME_OVER';

export enum CardType {
    DIVIDEND_10 = 'DIVIDEND_10',
    DIVIDEND_20 = 'DIVIDEND_20',
    LOAN_1L = 'LOAN_1L',
    LOAN_5L = 'LOAN_5L',
    BONUS_SHARE = 'BONUS_SHARE', // 1 for every 5
    RIGHT_ISSUE = 'RIGHT_ISSUE', // 1 for every 2 @ Rs 10
    FRAUD = 'FRAUD', // Buy @ 50% discount
    BUYBACK = 'BUYBACK', // Sell @ 10% premium
    SPLIT_3 = 'SPLIT_3', // 3 addtl for 1 (Global)
    SPLIT_5 = 'SPLIT_5', // 5 addtl for 1 (Global)
    CIRCUIT_BUYER = 'CIRCUIT_BUYER', // Cap +10%
    CIRCUIT_SELLER = 'CIRCUIT_SELLER' // Cap -10%
}

export interface GameState {
  phase: GamePhase;
  players: Player[];
  companies: Company[];
  currentSession: number;
  totalSessions: number;
  activePlayerIndex: number;
  playerActionCounts: Record<PlayerId, number>; // Tracks actions (0-3) per session for each player
  logs: LogEntry[];
  winnerId: PlayerId | null;
  companyDirectors: Record<CompanyId, PlayerId>; // Persistent Director titles
  activeCircuits: Record<CompanyId, 'BUYER' | 'SELLER' | null>; // Reset every session
}

export interface TransactionPreview {
  totalCost: number;
  fee: number;
  valid: boolean;
  message: string;
}
