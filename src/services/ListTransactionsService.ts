import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface ListTransactions {
  transactions: Transaction[],
  balance: Balance
}

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): ListTransactions {
    const transactions: ListTransactions = {
      transactions: this.transactionsRepository.all(),
      balance: this.transactionsRepository.getBalance()
    }
    return transactions;
    
  }
}

export default ListTransactionsService;
