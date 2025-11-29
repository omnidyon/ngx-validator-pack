/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';

export const UsernameChecks = () => checkFactory([
  // must contain at least one letter
  {
    validator: regexpValidator,
    args: [/[A-Za-z]/, '!!'],
    errorName: 'hasLetter',
    errorMsg: 'Username must contain at least one letter.',
  },
  // only letters, numbers and underscore
  {
    validator: regexpValidator,
    args: [/^[A-Za-z0-9_]+$/, '!!'],
    errorName: 'allowedChars',
    errorMsg: 'Username may only contain letters, numbers, and underscores.',
  },
  // length between 3 and 20
  {
    validator: regexpValidator,
    args: [/^.{3,20}$/, '!!'],
    errorName: 'length',
    errorMsg: 'Username must be between 3 and 20 characters.',
  },
  // cannot start or end with underscore
  {
    validator: regexpValidator,
    args: [/^(?!_)(?!.*_$).*$/, '!!'],
    errorName: 'noEdgeUnderscore',
    errorMsg: 'Username cannot start or end with an underscore.',
  },
  // no double underscore
  {
    validator: regexpValidator,
    args: [/^(?!.*__).*$/, '!!'],
    errorName: 'noDoubleUnderscore',
    errorMsg: 'Username cannot contain consecutive underscores.',
  },
]);
