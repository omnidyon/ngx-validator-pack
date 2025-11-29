/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';

export const AddressChecks = () =>
  checkFactory([
    {
      validator: regexpValidator,
      args: [/(\d{1,})/, '!!'],
      errorName: 'streetNumber',
      errorMsg: 'Street number.',
    },
    {
      validator: regexpValidator,
      args: [/(\d{1,})\s+[a-zA-Z0-9\s]+,?/, '!!'],
      errorName: 'streetName',
      errorMsg: 'Street name.',
    },
    {
      validator: regexpValidator,
      args: [/(\d{1,})\s+[a-zA-Z0-9\s]+,?\s+[a-zA-Z\s]+,?/, '!!'],
      errorName: 'city',
      errorMsg: 'City.',
    },
    {
      validator: regexpValidator,
      args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z\s]+(\,)? [A-Z]{2}/, '!!'],
      errorName: 'state',
      errorMsg: 'State.',
    },
    {
      validator: regexpValidator,
      args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z\s]+(\,)? [A-Z]{2} [0-9]{5,6}/, '!!'],
      errorName: 'zip',
      errorMsg: 'ZipCode.',
    },
  ]);
