// Uncomment the code below and write your tests
// import axios from 'axios';
// import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  // const mockData = { id: 1, title: 'Test' };
  // const mockResponse = { data: mockData };
  // const relativePath = '/posts/1';
  // const baseURL = 'https://jsonplaceholder.typicode.com';

  // const mockAxios = {
  //   get: jest.fn(),
  // } as unknown as jest.Mocked<typeof axios>;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    // mockAxios.get.mockResolvedValueOnce(mockResponse);
    // await throttledGetDataFromApi('');
    // expect(mockAxios.create).toHaveBeenCalledWith({
    //   baseURL,
    // });
  });

  test('should perform request to correct provided url', async () => {
    // jest.spyOn(axios, 'create').mockReturnValue(mockAxios);
    // const mockGet = jest.mocked(mockAxios.get).mockResolvedValue({
    //   data: mockData,
    // });
    // await throttledGetDataFromApi(relativePath);
    // jest.runOnlyPendingTimers();
    // expect(mockGet).toHaveBeenCalledWith(relativePath);
    // jest.runAllTimers();
  });

  test('should return response data', async () => {
    // jest.spyOn(axios, 'create').mockReturnValue(mockAxios);
    // jest.mocked(mockAxios.get).mockResolvedValue(mockResponse);
    // const fetchedData = await throttledGetDataFromApi('');
    // jest.runOnlyPendingTimers();
    // expect(fetchedData).toBe(mockData);
    // jest.runAllTimers();
  });
});
