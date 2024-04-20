import {AuthData} from '@app/types/auth.ts';
import {secureStorageService} from '@app/services/secureStorageService.ts';
import {appLogger} from '@app/lib/logger.ts';
import {AppHttpService} from '@app/services/appHttpService.ts';

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
  private readonly _http: AppHttpService;
  public authData: AuthData | null;

  constructor(http: AppHttpService) {
    this._http = http;
    this.authData = null;

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
      const credentials = await this._http.post<AuthResponse, AuthRequest>('/login', body);

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
