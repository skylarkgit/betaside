import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import { I18n } from 'aws-amplify';
import awsConfig from './aws-export';

Amplify.configure(awsConfig);

I18n.setLanguage('en');
const dict = {
  en: {
    Welcome: 'Welcome'
  },
  esp: {
    Welcome: 'Bienvenido'
  }
};

I18n.putVocabularies(dict);
I18n.setLanguage('esp');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
