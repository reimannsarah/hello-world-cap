import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hello-world-cap',
  webDir: 'out',
  server: {
    url: "http://10.0.0.29:3000",
    cleartext: true
  }
};

export default config;
