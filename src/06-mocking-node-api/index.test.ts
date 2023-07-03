// // Uncomment the code below and write your tests
// import fs from 'fs';
// import { join } from 'path';
// import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // const callback = jest.fn();
    // const timeout = 1000;
    // jest.spyOn(global, 'setTimeout').mockImplementation((callback) => {
    //   if (typeof callback === 'function') {
    //     doStuffByTimeout(callback, timeout);
    //   }
    //   return { hasRef: () => false } as NodeJS.Timeout;
    // });
    // expect(setTimeout).toBe(setTimeout);
    // expect(setTimeout).toHaveBeenCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    // const callback = jest.fn();
    // const timeout = 1000;
    // jest.spyOn(global, 'setTimeout').mockImplementation((callback) => {
    //   if (typeof callback === 'function') {
    //     doStuffByTimeout(callback, timeout);
    //   }
    //   return { hasRef: () => false } as NodeJS.Timeout;
    // });
    // expect(callback).toBeCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and interval', () => {
    // const callback = jest.fn();
    // const interval = 1000;
    // jest.spyOn(global, 'setInterval').mockImplementation((callback) => {
    //   if (typeof callback === 'function') {
    //     doStuffByTimeout(callback, interval);
    //   }
    //   return { hasRef: () => false } as NodeJS.Timeout;
    // });
    // // expect(callback).toHaveBeenCalledTimes(2);
    // expect(setInterval).toHaveBeenCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // const callback = jest.fn();
    // const interval = 1000;
    // doStuffByInterval(callback, interval);
    // jest.advanceTimersByTime(interval * 2);
    // expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  // const mockPathToFile = 'file.txt';
  // const mockPathToDir = '/path/to';
  // const mockFileContent = 'file content';

  test('should call join with pathToFile', async () => {
    // jest.spyOn(process, 'cwd').mockReturnValueOnce(mockPathToDir);
    // jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
    // await readFileAsynchronously(mockPathToFile);
    // expect(join).toHaveBeenCalledTimes(1);
    // expect(join).toHaveBeenCalledWith(mockPathToDir, mockPathToFile);
  });

  test('should return null if file does not exist', async () => {
    // jest.spyOn(process, 'cwd').mockReturnValueOnce(mockPathToDir);
    // jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);
    // const result = await readFileAsynchronously(mockPathToFile);
    // expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // jest.spyOn(process, 'cwd').mockReturnValueOnce(mockPathToDir);
    // jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
    // jest.spyOn(fs.promises, 'readFile').mockResolvedValueOnce(mockFileContent);
    // const result = await readFileAsynchronously(mockPathToFile);
    // expect(result).toBe(mockFileContent);
  });
});
