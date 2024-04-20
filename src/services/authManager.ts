import axios, {AxiosInstance} from 'axios';
import config, {NativeConfig} from 'react-native-config';
import Config from 'react-native-config';

import {AuthData} from '@app/types/auth.ts';
import {secureStorageService} from '@app/services/secureStorageService.ts';
import {appLogger} from '@app/lib/logger.ts';

export type AuthResponse = {
  access_token: string;
  data: {
    userId: string;
    email: string;
    role: string;
  };
};

export type AuthRequest = {
  email: string;
  password: string;
};

export class AuthManager {
  private readonly axios: AxiosInstance;
  public authData: AuthData | null;
  private config: NativeConfig;

  constructor() {
    this.axios = axios.create({
      baseURL: config.HOST_URL,
      withCredentials: true,
    });

    this.authData = null;
    this.config = Config;

    this.authUpdated = () => {
      throw new Error('"authUpdated" callback not initialized. Please initialize.');
    };
  }

  authUpdated: () => void;

  async loadState() {
    const authData = await secureStorageService.getAuthData();

    if (authData) {
      await this.storeAuthData(authData);
    } else {
      await this.signOut();
    }
  }

  async signOut() {
    await secureStorageService.removeAuthData();
    this.authData = null;
    this.authUpdated();
  }

  async apiAuthenticate(body: AuthRequest) {
    try {
      const credentials = await this.axios.post<AuthResponse>(`${this.config.HOST_URL}/login`, body);

      if (credentials.data) {
        const {data, access_token} = credentials.data;

        const authData: AuthData = {
          access_token,
          userId: data.userId,
          email: data.email,
        };

        await this.storeAuthData(authData);
      }
    } catch (error) {
      appLogger.error('[ERROR] Api authentication error', error);
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
