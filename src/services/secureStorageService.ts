import * as Keychain from 'react-native-keychain';

import {AuthData} from '@app/types/auth.ts';
import {appLogger} from '@app/lib/logger.ts';

export class SecureStorageService {
  private keychain: typeof Keychain;

  constructor() {
    this.keychain = Keychain;
  }
  async getAuthData(): Promise<AuthData | null> {
    try {
      appLogger.debug('[Storage] Getting stored auth data.');
      const credentials = await this.keychain.getGenericPassword();
      if (!credentials) {
        appLogger.info('[Storage] No saved auth data found.');
        return null;
      }
      appLogger.debug('[Storage] Found stored auth data.', credentials);
      return JSON.parse(credentials.password);
    } catch (e) {
      appLogger.error('[Storage] Error occurred when getting auth data.', e);
      await this.removeAuthData();
      throw new Error('Error occurred when getting auth data.');
    }
  }

  async setAuthData(authData: AuthData): Promise<void> {
    let result: Keychain.Result | false = false;
    try {
      appLogger.debug('[Storage] Storing auth data.', authData);
      const authState = JSON.stringify(authData);
      result = await this.keychain.setGenericPassword(authData.userId.toString(), authState);
    } catch (e) {
      appLogger.error('[Storage] Error occurred when storing auth data.', e);
      result = false;
    }

    if (!result) {
      throw new Error('Error occurred when storing auth data.');
    }
  }

  async removeAuthData(): Promise<void> {
    try {
      appLogger.debug('[Storage] Deleting stored auth data.');
      await this.keychain.resetGenericPassword();
    } catch (e) {
      appLogger.error('[Storage] Error occurred when deleting auth data.', e);
    }
  }
}

export const secureStorageService = new SecureStorageService();
