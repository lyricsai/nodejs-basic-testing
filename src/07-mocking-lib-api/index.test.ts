import axios, { AxiosInstance } from 'axios';

import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const relativePath = '/posts/1';
  const mockResponse = 'mocked data';

  const mockAxios = {
    get: jest.fn(),
  } as unknown as AxiosInstance;

  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.restoreAllMocks();
    jest.runAllTimers();
  });

  test('should create instance with provided base url', async () => {
    const mockAxios = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi('/');

    expect(mockAxios).toBeCalled();

    const expectedBaseURL = mockAxios.mock.results[0]?.value.defaults.baseURL;
    expect(expectedBaseURL).toBe(baseURL);

    mockAxios.mockRestore();
  });

  test('should perform request to correct provided url', async () => {
    jest.spyOn(axios, 'create').mockReturnValue(mockAxios);

    const mockGet = jest.mocked(mockAxios.get).mockResolvedValue({
      data: 'mocked data',
    });
    await throttledGetDataFromApi(relativePath);

    jest.runOnlyPendingTimers();
    expect(mockGet).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    jest.spyOn(axios, 'create').mockReturnValue(mockAxios);

    jest.mocked(mockAxios.get).mockResolvedValue({
      data: mockResponse,
    });
    const fetchedData = await throttledGetDataFromApi('');

    jest.runOnlyPendingTimers();
    expect(fetchedData).toBe(mockResponse);
  });
});
