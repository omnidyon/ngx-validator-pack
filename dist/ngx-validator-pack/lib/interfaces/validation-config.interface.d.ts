/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ComparisonOperations, RegExpLogicalOperations } from "../types";
/**
 * @internal
 * @description
 * An interface representing the base of the value which can be
 * passed to Template Form Validator Directives.
 */
export interface BaseValidationConfig {
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
export interface RegExpValidationConfig extends BaseValidationConfig {
    regExp: RegExp;
    logic?: RegExpLogicalOperations;
}
/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * date comparison directives.
 * {@link EarlierThenValidatorDirective}
 * {@link LaterThenValidatorDirective}
 */
export interface DateValidationConfig extends BaseValidationConfig {
    date: Date;
}
/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * compareToValidation Directive
 * {@link compareToValidation}
 */
export interface CompareValidationConfig extends BaseValidationConfig {
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
export interface ConditionalValidationConfig extends BaseValidationConfig {
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
export interface LinkValidationConfig extends BaseValidationConfig {
    link: string;
}
/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * lengthValidation Directive
 * {@link LengthValidatorDirective}
 */
export interface LengthValidationConfig extends BaseValidationConfig {
    length: number;
    comparison: ComparisonOperations;
}
/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * wordCountValidation Directive
 * {@link }
 */
export interface CountValidationConfig extends BaseValidationConfig {
    count: number;
    comparison: ComparisonOperations;
}
/**
 * @publicApi
 * @description
 * An interface representing the value which can be passed to
 * rangeValidation Directive
 * {@link RangeValidatorDirective}
 */
export interface RangeValidationConfig extends BaseValidationConfig {
    start: number;
    end: number;
}
