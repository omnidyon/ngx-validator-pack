/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';

export const PhoneChecks = () =>
  checkFactory([
    // allowed characters only
    {
      validator: regexpValidator,
      args: [/^[0-9+\-\s()]*$/, '!!'],
      errorName: 'allowedChars',
      errorMsg: 'Phone may contain only digits, spaces, "+", "-", "(" and ")".',
    },
    // if it starts with +, next char must be a digit
    {
      validator: regexpValidator,
      args: [/\d/, '!!'],
      errorName: 'hasDigit',
      errorMsg: 'Phone number must contain at least one digit.',
    },
    // total digits between 8 and 15
    {
      validator: regexpValidator,
      args: [/(?:\D*\d){8,15}\D*$/, '!!'],
      errorName: 'digitCount',
      errorMsg: 'Phone number must contain between 8 and 15 digits.',
    },
  ]);
