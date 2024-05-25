import axios, {AxiosInstance, AxiosResponse} from 'axios';
import Config from 'react-native-config';

import {AuthData} from '@app/types/auth.ts';
import {secureStorageService} from '@app/services/secureStorageService.ts';
import {Logger} from '@app/lib/logger.ts';

export type AuthResponse = {
  access_token: string;
  data: {
    id: string;
    email: string;
    role: string;
  };
};

export type AuthRequest = {
  email: string;
  password: string;
};

export class AuthManager {
  private readonly _http: AxiosInstance;
  public authData: AuthData | null;
  private readonly logger: Logger;
  public authStatus: 'idle' | 'signOut' | 'signIn';

  constructor() {
    this._http = axios.create({
      baseURL: 'http://192.168.0.101:5500',
      withCredentials: true,
    });
    this.authData = null;
    this.logger = new Logger();
    this.authStatus = 'idle';

    this.authUpdated = () => {
      throw new Error(
        '"authUpdated" callback not initialized. Please initialize.',
      );
    };
  }

  authUpdated: () => void;

  async loadState() {
    const authData = await secureStorageService.getAuthData();

    if (authData) {
      await this.storeAuthData(authData);
      this.authStatus = 'signIn';
    } else {
      await this.signOut();
    }

    this.authUpdated();
  }

  async signOut() {
    await secureStorageService.removeAuthData();
    this.authData = null;
    this.authStatus = 'signOut';
    this.authUpdated();
  }

  async signIn(body: AuthRequest) {
    try {
      const credentials = await this._http.post<
        AuthResponse,
        AxiosResponse<AuthResponse>,
        AuthRequest
      >('/auth/login', body);

      if (credentials.data) {
        const {data, access_token} = credentials.data;

        const authData: AuthData = {
          access_token,
          userId: data.id,
          email: data.email,
        };

        await this.storeAuthData(authData);

        this.authStatus = 'signIn';

        this.authUpdated();
      }
    } catch (error) {
      this.logger.error('[ERROR] Api authentication error', error);
    }
  }

  async signUp(body: AuthRequest) {
    try {
      const credentials = await this._http.post<
        AuthResponse,
        AxiosResponse<AuthResponse>,
        AuthRequest
      >('/auth/registration', body);

      if (credentials.data) {
        const {data, access_token} = credentials.data;

        const authData: AuthData = {
          access_token,
          userId: data.id,
          email: data.email,
        };

        await this.storeAuthData(authData);

        this.authStatus = 'signIn';
      }
    } catch (error) {
      this.logger.error('[ERROR] Api registration error', error);
    }
  }

  private async storeAuthData(authData: AuthData) {
    this.authData = {
      userId: authData.userId,
      email: authData.email,
      access_token: authData.access_token,
    };

    await secureStorageService.setAuthData(authData);
  }
}

export const authManager = new AuthManager();
