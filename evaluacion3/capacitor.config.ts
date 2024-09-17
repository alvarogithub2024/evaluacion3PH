import type { CapacitorConfig } from '@capacitor/cli';
import { CapacitorHttp } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'ionic.evaluacion3',
  appName: 'evaluacion3',
  webDir: 'www', 
  server:{
    androidScheme:'https'
  }
};
plugins :{
  CapacitorHttp: {
    enabled:true
  }
}

export default config;