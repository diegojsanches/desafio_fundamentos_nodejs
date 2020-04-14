import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import ListTransactionsService from '../services/ListTransactionsService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const listTransactionsService = new ListTransactionsService(
      transactionsRepository
    );
    const listTransactions = listTransactionsService.execute();
    return response.json(listTransactions);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, type, value } = request.body;

    const createTransactionService = new CreateTransactionService(
      transactionsRepository
    );

    const createTransaction = createTransactionService.execute({
      title,
      type,
      value
    });

    return response.json(createTransaction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
