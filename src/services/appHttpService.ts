import axios, {AxiosHeaders, AxiosInstance, AxiosResponse} from 'axios';
import Config, {NativeConfig} from 'react-native-config';
import {secureStorageService} from '@app/services/secureStorageService.ts';

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

  private async apiRequest<TResponse, TRequest>(
    method: EHttpMethod,
    url: string,
    body: TRequest,
  ): Promise<AxiosResponse<TResponse>> {
    const headers = await this.prepareHeaders();

    return this.axios.request<TResponse, AxiosResponse<TResponse>, TRequest>({
      method,
      url: `${this.config.HOST_URL}${url}`,
      data: body,
      responseType: 'json',
      headers,
    });
  }

  private async prepareHeaders() {
    const headers = new AxiosHeaders();

    const authData = await secureStorageService.getAuthData();

    if (authData) {
      headers.set('Authorization', `Bearer ${authData.access_token}`);
    }

    return headers;
  }
}
