import 'regenerator-runtime/runtime';

import {API_URL, URL_COMICS} from './const/api'
import {getDataApi} from './utils/getData.Api'

(async () => {
  const data = await getDataApi.getData(API_URL + URL_COMICS);
  console.log('Result:', data)
})();