import {configLoggerType, mapConsoleTransport, logger as rnLogger} from 'react-native-logs';
import config, {NativeConfig} from 'react-native-config';

export class Logger {
  private readonly config: NativeConfig;
  private readonly rnLogger;

  constructor() {
    this.config = config;
    const loggingConfig = this.buildConfig();
    this.rnLogger = rnLogger.createLogger(loggingConfig);
  }

  debug(message: unknown, obj?: unknown) {
    if (obj && !this.isSeverityDebug()) {
      this.rnLogger.debug(message, obj);
    } else {
      this.rnLogger.debug(message);
    }
    this.logFullObject(obj);
  }

  info(message: unknown, obj?: unknown) {
    if (obj && !this.isSeverityDebug()) {
      this.rnLogger.info(message, obj);
    } else {
      this.rnLogger.info(message);
    }
    this.logFullObject(obj);
  }

  warn(message: unknown, obj?: unknown) {
    if (obj && !this.isSeverityDebug()) {
      this.rnLogger.warn(message, obj);
    } else {
      this.rnLogger.warn(message);
    }
    this.logFullObject(obj);
  }

  error(message: unknown, obj?: unknown) {
    if (obj && !this.isSeverityDebug()) {
      this.rnLogger.error(message, obj);
      this.logFullObject(obj);
    } else {
      this.rnLogger.error(message);
    }
  }

  private buildConfig(): configLoggerType {
    return {
      transport: mapConsoleTransport,
      transportOptions: {
        colors: {
          debug: 'white',
          info: 'whiteBright',
          warn: 'yellowBright',
          error: 'redBright',
        },
      },
      enabled: this.config.LOG_ENABLED === 'true',
      severity: this.config.LOG_SEVERITY,
    };
  }

  private isSeverityDebug() {
    return this.rnLogger.getSeverity() === 'debug';
  }

  private logFullObject(obj: unknown) {
    if (obj && this.isSeverityDebug()) {
      const json = JSON.stringify(obj, undefined, 2);
      this.debug(json);
    }
  }
}

export const appLogger = new Logger();
