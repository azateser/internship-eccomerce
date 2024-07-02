import axios, { Method } from 'axios';
import { API_URL } from '../constants';

export enum RequestType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export const HttpRequest = async <Req, Res>({
  url,
  method = RequestType.GET,
  body,
  isFormData,
  params
}: {
  url: string;
  method?: RequestType;
  body?: Req;
  isFormData?: boolean;
  params?: Record<string, any>;
}): Promise<Res> => {
  const token = JSON.parse(window.localStorage.getItem('token') || '""');

  const headers = {
    Authorization: `Bearer ${token}`,
    ...(isFormData ? {} : { 'Content-Type': 'application/json', Accept: 'application/json' })
  };

  try {
    const response = await axios.request<Res>({
      url: `${API_URL}${url}`,
      method: method as Method,
      headers,
      data: isFormData ? body : JSON.stringify(body),
      params
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      const { status } = error.response;

      if (status === 403) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }

      if (status === 500) {
        throw new Error('Server Error');
      }

      if (status === 401) {
        throw new Error('Unauthorized');
      }

      if (status === 404) {
        throw new Error('Not Found');
      }
    }

    throw error;
  }
};
