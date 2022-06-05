import env, { NativeConfig } from 'react-native-config';

interface Env extends NativeConfig {
  KEY: string;
}

const nEnv = env as Env;

export default nEnv;
