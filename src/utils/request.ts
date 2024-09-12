import axios from 'axios';
import { type AxiosError, type AxiosResponse } from 'axios';

type data = object | Array<object | number | string>;
export const useAxios = async <T>(
  method: string,
  uri: string,
  data?: data
): Promise<AxiosResponse<T>> => {
  try {
    const axiosInstance = axios.create();

    return axiosInstance({
      method,
      url: uri,
      data,
    });
  } catch (error) {
    const err = error as AxiosError<Error>;

    if (`${err?.response?.status}`?.charAt(0) === '5') {
      console.log('Server error, do something else here');
    }

    // throw it so the callee of _axios can use it
    throw err;
  }
};
