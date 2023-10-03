const convertOrDefault = (
  raw: string | undefined,
  defaultValue: string,
): string => {
  if (!raw) return defaultValue;

  return raw;
};

const convertIntOrDefault = (
  raw: string | undefined,
  defaultValue: number,
): number => {
  if (!raw) return defaultValue;
  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed)) return defaultValue;

  return parsed;
};

const convertBooleanOrDefault = (
  raw: string | undefined,
  defaultValue: boolean,
): boolean => {
  if (!raw) return defaultValue;
  if (raw !== 'true' && raw !== 'false') return defaultValue;
  if (raw === 'true') return true;
  if (raw === 'false') return false;

  return false;
};

export const generateAppConfig = () => {
  // NOTE: 必須としたい環境変数をチェックする
  if (!process.env.APP_VERSION) {
    console.error('APP_VERSION environmental variable is missing!');
    process.exit();
  }

  return {
    app: {
      version: process.env.APP_VERSION,
      enviroment: process.env.NODE_ENV,
      logging: convertBooleanOrDefault(process.env.DB_LOGGING, false),
    },
  };
};

export type AppConfig = ReturnType<typeof generateAppConfig>;
