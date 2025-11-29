/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';

export const EmailChecks = () => checkFactory([
  {
    validator: regexpValidator,
    args: [/@/, '!!'],
    errorName: 'hasAt',
    errorMsg: 'Email must contain an "@" symbol.',
  },
  {
    validator: regexpValidator,
    args: [/^[^@\s]+@/, '!!'],
    errorName: 'localPart',
    errorMsg: 'Email must have text before "@".',
  },
  {
    validator: regexpValidator,
    args: [/@[^@\s]+$/, '!!'],
    errorName: 'domainPart',
    errorMsg: 'Email must have a domain after "@".',
  },
  {
    validator: regexpValidator,
    args: [/@.+\./, '!!'],
    errorName: 'hasDot',
    errorMsg: 'Email domain must contain a dot (".").',
  },
  {
    validator: regexpValidator,
    args: [/\.[A-Za-z]{2,}$/, '!!'],
    errorName: 'tldLength',
    errorMsg: 'Email TLD must be at least 2 characters.',
  },
  {
    validator: regexpValidator,
    args: [/^\S*$/, '!!'],
    errorName: 'noSpaces',
    errorMsg: 'Email must not contain spaces.',
  },
]);
