/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';

export const SlugChecks = () =>
  checkFactory([
    // ✔ only lowercase letters, numbers and dashes
    {
      validator: regexpValidator,
      args: [/^[a-z0-9-]+$/, '!!'],
      errorName: 'allowedChars',
      errorMsg: 'Only lowercase letters, numbers and dashes are allowed.',
    },

    // ✔ min/max length
    {
      validator: regexpValidator,
      args: [/^.{3,50}$/, '!!'],
      errorName: 'length',
      errorMsg: 'Slug must be between 3 and 50 characters.',
    },

    // ✖ must NOT start with a dash
    {
      validator: regexpValidator,
      args: [/^-/, '!'],
      errorName: 'noLeadingDash',
      errorMsg: 'Slug cannot start with a dash.',
    },

    // ✖ must NOT end with a dash
    {
      validator: regexpValidator,
      args: [/-$/, '!'],
      errorName: 'noTrailingDash',
      errorMsg: 'Slug cannot end with a dash.',
    },

    // ✖ must NOT contain consecutive dashes
    {
      validator: regexpValidator,
      args: [/--/, '!'],
      errorName: 'noDoubleDash',
      errorMsg: 'Slug cannot contain repeated dashes.',
    },
  ]);
