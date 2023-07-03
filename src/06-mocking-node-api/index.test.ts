// Uncomment the code below and write your tests
import fs from 'fs';
import path from 'path';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  const timeout = 1000;
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('should set timeout with provided callback and timeout', () => {
    const mockTimeout = jest.spyOn(global, 'setTimeout');

    const callback = () => 'callback';

    doStuffByTimeout(callback, timeout);

    expect(mockTimeout).toHaveBeenCalledTimes(1);
    expect(mockTimeout).toHaveBeenLastCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    const mockCallback = jest.fn();

    doStuffByTimeout(mockCallback, timeout);

    expect(mockCallback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(timeout);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  const interval = 1000;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('should set interval with provided callback and interval', () => {
    const spyInterval = jest.spyOn(global, 'setInterval');

    const callback = () => 'callback';

    doStuffByInterval(callback, interval);

    expect(spyInterval).toHaveBeenCalledTimes(1);
    expect(spyInterval).toHaveBeenLastCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, interval);
    jest.advanceTimersByTime(interval * 2);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  const mockPathToFile = 'file.txt';
  const mockFileContent = 'file content';

  test('should call join with pathToFile', async () => {
    const mockJoin = jest.spyOn(path, 'join');

    await readFileAsynchronously(mockPathToFile);
    expect(mockJoin).toHaveBeenCalledWith(__dirname, mockPathToFile);
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = 'nonExistingFile.txt';

    const result = await readFileAsynchronously(pathToFile);

    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    const mockExistSync = jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    const mockReadFile = jest
      .spyOn(fs.promises, 'readFile')
      .mockResolvedValue(Buffer.from(mockFileContent));

    const result = await readFileAsynchronously(mockPathToFile);

    expect(mockExistSync).toHaveBeenCalledTimes(1);
    expect(mockReadFile).toHaveBeenCalledTimes(1);
    expect(result).toBe(mockFileContent);
  });
});
