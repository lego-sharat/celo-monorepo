import Web3 from 'web3';
import { Escrow as EscrowType } from '../types/Escrow';
export default function getInstance(web3: Web3, account?: string | null): Promise<EscrowType>;