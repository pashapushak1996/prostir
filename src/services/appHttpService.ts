import axios, {AxiosInstance, AxiosResponse} from 'axios';
import Config, {NativeConfig} from 'react-native-config';
import {authManager} from '@app/services/authManager.ts';

export enum EHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export class AppHttpService {
  private readonly axios: AxiosInstance;
  private config: NativeConfig;

  constructor() {
    this.axios = axios;
    this.config = Config;
  }

  get<TResponse>(url: string): Promise<AxiosResponse<TResponse>> {
    return this.apiRequest(EHttpMethod.GET, url, undefined);
  }

  post<TResponse, TRequest>(url: string, body: TRequest): Promise<AxiosResponse<TResponse>> {
    return this.apiRequest(EHttpMethod.POST, url, body);
  }

  put<TResponse, TRequest>(url: string, body: TRequest): Promise<AxiosResponse<TResponse>> {
    return this.apiRequest(EHttpMethod.PUT, url, body);
  }

  delete<TResponse>(url: string): Promise<AxiosResponse<TResponse>> {
    return this.apiRequest(EHttpMethod.DELETE, url, undefined);
  }

  private apiRequest<TResponse, TRequest>(
    method: EHttpMethod,
    url: string,
    body: TRequest,
  ): Promise<AxiosResponse<TResponse>> {
    const authToken = authManager.authData?.access_token;

    return this.axios.request<TResponse, AxiosResponse<TResponse>, TRequest>({
      method,
      url: `${this.config.HOST_URL}/${url}`,
      data: body,
      responseType: 'json',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  }
}
