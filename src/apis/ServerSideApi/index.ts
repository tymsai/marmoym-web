import axios from 'axios';

import { getPayload } from '../apiUtils';
import * as URL from './ServerSideApiURL';

export function getTranslate(locale) {
  return axios.get(`${URL.GET_LOCALE}/${locale}`)
  .then(getPayload)
  .catch((err) => {
    return err;
  });
}
