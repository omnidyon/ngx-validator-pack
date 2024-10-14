/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, singleSpace, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../constant/regex";
import { regexpNotValidator, regexpValidator, } from "./reactive-forms-validators";
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const addressValidator = (errorName = "address", error = "Please input a value in a format of: Street number Street Name, City, State ZIP code.") => regexpValidator(address, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const alphabetOnlyValidator = (errorName = "alphabetOnly", error = "Only alphabetic characters are allowed.") => regexpValidator(lettersOnly, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param {string}                    - optional parameter representing error name
 * @param { string}                   - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateDD_MM_YYYYValidator = (errorName = "dateDD_MM_YYYY", error = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.") => regexpValidator(dateDD_MM_YYYY, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateYYYY_MM_DDValidator = (errorName = "dateYYYY_MM_DD", error = "Please input a value in a format: YYYY-MM-dd.") => regexpValidator(dateYYYY_MM_DD, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const emailValidator = (errorName = "email", error = "Please input a value in a format: local-part@domain.com.") => regexpValidator(email, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ipAddressValidator = (errorName = "ipAddress", error = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y") => regexpValidator(IPAddressV4AndV6, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv4Validator = (errorName = "iPv4", error = "Please input a value in a format: x.x.x.x.") => regexpValidator(IPAddressV4, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv6Validator = (errorName = "iPv6", error = "Please input a value in a format: y:y:y:y:y:y:y:y.") => regexpValidator(IPAddressV6, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const numericsOnlyValidator = (errorName = "numericsOnly", error = "Only numeric characters are allowed.") => regexpValidator(numbersOnly, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const noSpecialsValidator = (errorName = "noSpecials", error = "No special characters are allowed.") => regexpValidator(noSpecial, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passportValidator = (errorName = "passport", error = "Incorrect passport format.") => regexpValidator(passport, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passwordValidator = (errorName = "password", error = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.") => regexpValidator(passwordStrength, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const phoneNumberValidator = (errorName = "phoneNumber", error = "Please input a value in a format: (000) 000 0000.") => regexpValidator(phoneNumber, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const singleSpaceValidator = (errorName = "singleSpace", error = "A single space character is not allowed.") => regexpNotValidator(singleSpace, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const spaceRestrictionValidator = (errorName = "spaceRestriction", error = "Value can not start or end with a space character.") => regexpValidator(spaceRestriction, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ssnValidator = (errorName = "ssn", error = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.") => regexpValidator(ssn, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_12Validator = (errorName = "timeHH_MM_12", error = "Please input a value in a HH:MM 12-hour format.") => regexpValidator(timeHH_MM_12, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_24Validator = (errorName = "timeHH_MM_24", error = "Please input a value in a HH:MM 24-hour format.") => regexpValidator(timeHH_MM_24, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_SS_24Validator = (errorName = "timeHH_MM_SS_24", error = "Please input a value in a HH:MM:SS 24-hour format.") => regexpValidator(timeHH_MM_SS_24, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const urlValidator = (errorName = "url", error = "Improper URL format.") => regexpValidator(url, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const zipCodeValidator = (errorName = "zipCode", error = "Improper zip code format.") => regexpValidator(zipCode, errorName, error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByZWJ1aWx0LXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9yZWFjdGl2ZS1mb3Jtcy9uZ3gtcHJlYnVpbHQtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxjQUFjLEVBQ2QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsR0FBRyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLEdBQUcsRUFDSCxPQUFPLEdBQ1IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGVBQWUsR0FDaEIsTUFBTSw2QkFBNkIsQ0FBQztBQUVyQzs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixZQUFvQixTQUFTLEVBQzdCLFFBQWdCLHVGQUF1RixFQUM5RSxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFekU7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUNuQyxZQUFvQixjQUFjLEVBQ2xDLFFBQWdCLHlDQUF5QyxFQUNoQyxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFN0U7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUNyQyxZQUFvQixnQkFBZ0IsRUFDcEMsUUFBZ0IsNEZBQTRG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QUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgSVBBZGRyZXNzVjQsXHJcbiAgSVBBZGRyZXNzVjRBbmRWNixcclxuICBJUEFkZHJlc3NWNixcclxuICBhZGRyZXNzLFxyXG4gIGRhdGVERF9NTV9ZWVlZLFxyXG4gIGRhdGVZWVlZX01NX0RELFxyXG4gIGVtYWlsLFxyXG4gIGxldHRlcnNPbmx5LFxyXG4gIG5vU3BlY2lhbCxcclxuICBudW1iZXJzT25seSxcclxuICBwYXNzcG9ydCxcclxuICBwYXNzd29yZFN0cmVuZ3RoLFxyXG4gIHBob25lTnVtYmVyLFxyXG4gIHNpbmdsZVNwYWNlLFxyXG4gIHNwYWNlUmVzdHJpY3Rpb24sXHJcbiAgc3NuLFxyXG4gIHRpbWVISF9NTV8xMixcclxuICB0aW1lSEhfTU1fMjQsXHJcbiAgdGltZUhIX01NX1NTXzI0LFxyXG4gIHVybCxcclxuICB6aXBDb2RlLFxyXG59IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiO1xyXG5pbXBvcnQge1xyXG4gIHJlZ2V4cE5vdFZhbGlkYXRvcixcclxuICByZWdleHBWYWxpZGF0b3IsXHJcbn0gZnJvbSBcIi4vcmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9yc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBwcm9wZXIgYWRkcmVzcyBmb3JtYXRcclxuICogKFN0cmVldCBudW1iZXIgU3RyZWV0IE5hbWUsIENpdHksIFN0YXRlIFpJUCBjb2RlKVxyXG4gKiBFeGFtcGxlOiAzMzQ0IFcgQWxhbWVkYSBBdmVudWUsIExha2V3b29kLCBDTyA4MDIyMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwiYWRkcmVzc1wiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0IG9mOiBTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZS5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IoYWRkcmVzcywgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBjb25zaXN0cyBvZiBvbmx5XHJcbiAqIGFscGhhYmV0aWMgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFscGhhYmV0T25seVZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwiYWxwaGFiZXRPbmx5XCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiT25seSBhbHBoYWJldGljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKGxldHRlcnNPbmx5LCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IGRkLU1NLVlZWVksIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0geyBzdHJpbmd9ICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRhdGVERF9NTV9ZWVlZVmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJkYXRlRERfTU1fWVlZWVwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IGRkLU1NLVlZWVkgb3IgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZLlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcihkYXRlRERfTU1fWVlZWSwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6XHJcbiAqIFlZWVktTU0tZGQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBkYXRlWVlZWV9NTV9ERFZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwiZGF0ZVlZWVlfTU1fRERcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogWVlZWS1NTS1kZC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IoZGF0ZVlZWVlfTU1fREQsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbWFpbFZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwiZW1haWxcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogbG9jYWwtcGFydEBkb21haW4uY29tLlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcihlbWFpbCwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlwQWRkcmVzc1ZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwiaXBBZGRyZXNzXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogeC54LngueCBvciB5Onk6eTp5Onk6eTp5OnlcIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PlxyXG4gIHJlZ2V4cFZhbGlkYXRvcihJUEFkZHJlc3NWNEFuZFY2LCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogeC54LngueC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlQdjRWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlQdjRcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogeC54LngueC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IoSVBBZGRyZXNzVjQsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiB5Onk6eTp5Onk6eTp5OnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBpUHY2VmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJpUHY2XCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IHk6eTp5Onk6eTp5Onk6eS5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IoSVBBZGRyZXNzVjYsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgY29uc2lzdHMgb2Ygb25seVxyXG4gKiBudW1lcmljIGNoYXJhY3RlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBudW1lcmljc09ubHlWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcIm51bWVyaWNzT25seVwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIk9ubHkgbnVtZXJpYyBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcihudW1iZXJzT25seSwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYW55IHNwZWNpYWwgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vU3BlY2lhbHNWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcIm5vU3BlY2lhbHNcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJObyBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKG5vU3BlY2lhbCwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIHByb3BlciBwYXNzcG9ydCBmb3JtYXRcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhc3Nwb3J0VmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJwYXNzcG9ydFwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIkluY29ycmVjdCBwYXNzcG9ydCBmb3JtYXQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKHBhc3Nwb3J0LCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgc3Ryb25nIHBhc3N3b3JkIGZvcm1hdFxyXG4gKiAoSGFzIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCAxIG51bWJlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzXHJcbiAqIGxlbmd0aCBvZiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInBhc3N3b3JkXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiVGhlIHZhbHVlIGhhcyB0byBjb250YWluIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCAxIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBoYXMgYSBsZW5ndGggb2YgOC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PlxyXG4gIHJlZ2V4cFZhbGlkYXRvcihwYXNzd29yZFN0cmVuZ3RoLCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogKDAwMCkgMDAwIDAwMDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlclZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwicGhvbmVOdW1iZXJcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogKDAwMCkgMDAwIDAwMDAuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKHBob25lTnVtYmVyLCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGNvbnNpc3RzIG9mIGEgc2luZ2xlIHNwYWNlXHJcbiAqIGNoYXJhY3Rlci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNpbmdsZVNwYWNlVmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJzaW5nbGVTcGFjZVwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIkEgc2luZ2xlIHNwYWNlIGNoYXJhY3RlciBpcyBub3QgYWxsb3dlZC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBOb3RWYWxpZGF0b3Ioc2luZ2xlU3BhY2UsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgc3RhcnRzIG9yIGVuZHMgd2l0aCBhXHJcbiAqIHNwYWNlIGNoYXJhY3Rlci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNwYWNlUmVzdHJpY3Rpb25WYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNwYWNlUmVzdHJpY3Rpb25cIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJWYWx1ZSBjYW4gbm90IHN0YXJ0IG9yIGVuZCB3aXRoIGEgc3BhY2UgY2hhcmFjdGVyLlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+XHJcbiAgcmVnZXhwVmFsaWRhdG9yKHNwYWNlUmVzdHJpY3Rpb24sIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gb25lIG9mIHRoZVxyXG4gKiBmb2xsb3dpbmcgZm9ybWF0czogQUFBLUdHRy1TU1NTIG9yIEFBQUdHR1NTU1MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBzc25WYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNzblwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcihzc24sIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxyXG4gKiBUaW1lIEZvcm1hdCBISDpNTSAxMi1ob3VyIHdpdGggb3B0aW9uYWwgbGVhZGluZyAwLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGltZUhIX01NXzEyVmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fMTJcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NIDEyLWhvdXIgZm9ybWF0LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcih0aW1lSEhfTU1fMTIsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxyXG4gKiBUaW1lIEZvcm1hdCBISDpNTSAyNC1ob3VyIHdpdGggb3B0aW9uYWwgbGVhZGluZyAwLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGltZUhIX01NXzI0VmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fMjRcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NIDI0LWhvdXIgZm9ybWF0LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcih0aW1lSEhfTU1fMjQsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxyXG4gKiBUaW1lIEZvcm1hdCBISDpNTTpTUyAyNC1ob3VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGltZUhIX01NX1NTXzI0VmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fU1NfMjRcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NOlNTIDI0LWhvdXIgZm9ybWF0LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+XHJcbiAgcmVnZXhwVmFsaWRhdG9yKHRpbWVISF9NTV9TU18yNCwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIGNvcnJlY3QgdXJsIGZvcm1hdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVybFZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwidXJsXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiSW1wcm9wZXIgVVJMIGZvcm1hdC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IodXJsLCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IDAwMDAwIG9yIDAwMDAwLTAwMDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB6aXBDb2RlVmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJ6aXBDb2RlXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiSW1wcm9wZXIgemlwIGNvZGUgZm9ybWF0LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcih6aXBDb2RlLCBlcnJvck5hbWUsIGVycm9yKTtcclxuIl19