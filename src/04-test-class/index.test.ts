// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
  BankAccount,
} from '.';

describe('BankAccount', () => {
  const initialBalance = 100;
  let account: BankAccount;

  beforeEach(() => {
    account = getBankAccount(initialBalance);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const withdrawingAmount = 200;

    expect(() => account.withdraw(withdrawingAmount)).toThrow(
      new InsufficientFundsError(account.getBalance()),
    );
  });

  test('should throw error when transferring more than balance', () => {
    const account1 = account;
    const account2 = getBankAccount(200);

    expect(() => account1.transfer(300, account2)).toThrow(
      new InsufficientFundsError(account.getBalance()),
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(50, account)).toThrow(
      new TransferFailedError(),
    );
  });

  test('should deposit money', () => {
    const depositAmount = 50;
    account.deposit(depositAmount);
    expect(account.getBalance()).toBe(100 + depositAmount);
  });

  test('should withdraw money', () => {
    const withdrawAmount = 50;
    account.withdraw(withdrawAmount);
    expect(account.getBalance()).toBe(100 - withdrawAmount);
  });

  test('should transfer money', () => {
    const account1 = account;
    const account2 = getBankAccount(200);
    const transferAmount = 50;
    account1.transfer(transferAmount, account2);
    expect(account1.getBalance()).toBe(100 - transferAmount);
    expect(account2.getBalance()).toBe(200 + transferAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await account.fetchBalance();
    if (balance !== null) {
      expect(typeof balance).toBe('number');
    } else {
      expect(balance).toBeNull();
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const balance = 150;
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(balance);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(balance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(null);
    await expect(account.synchronizeBalance()).rejects.toThrow(
      new SynchronizationFailedError(),
    );
    expect(account.getBalance()).toBe(100); // Balance should remain unchanged
  });
});
