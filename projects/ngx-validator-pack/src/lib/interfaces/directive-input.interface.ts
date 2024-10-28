/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { ComparisonOperations } from '../helpers/date';

/**
 * @internal
 * @description
 * An interface representing the base of the value which can be 
 * passed to Template Form Validator Directives. 
 */
export interface BaseValidationInput {
  error?: string;
  errorName?: string;
}

/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * regexpValidation Directive
 * {@link RegExpValidatorDirective}
 */
export interface RegExpValidationInput extends BaseValidationInput {
  regExp: RegExp;
}

/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * date comparison directives.
 * {@link EarlierThenValidatorDirective}
 * {@link LaterThenValidatorDirective}
 */
export interface DateValidationInput extends BaseValidationInput {
  date: Date;
}

/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * compareToValidation Directive
 * {@link compareToValidation}
 */
export interface CompareValidationInput extends BaseValidationInput {
  fieldName: string;
  comparison: ComparisonOperations;
}

/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * requiredWhenValidation Directive
 * {@link  RequiredWhenValidatorDirective}
 */
export interface ConditionalValidationInput extends BaseValidationInput {
  conditional: (() => boolean) | boolean;
}

/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * date link directives.
 * {@link LinkToValidatorDirective}
 * {@link LinkedToValidatorDirective}
 */
export interface LinkValidationInput extends BaseValidationInput {
  link: string;
}
