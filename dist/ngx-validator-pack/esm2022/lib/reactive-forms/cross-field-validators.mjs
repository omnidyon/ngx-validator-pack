/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { requiredEtherValidation, requiredIfNotValidation, requiredIfValidation, } from "../validations/cross-field-validations";
/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIf = (required, check, error) => {
    return (control) => {
        return requiredIfValidation(control, { required, check, error });
    };
};
/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIfNot = (required, check, error) => {
    return (control) => {
        return requiredIfNotValidation(control, { required, check, error });
    };
};
/**
 * @publicApi
 * @description
 * Assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * @param required                    - name of the first control
 * @param check                       - name of the second control
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredEther = (required, check, error) => {
    return (control) => {
        return requiredEtherValidation(control, { required, check, error });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL2Nyb3NzLWZpZWxkLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEdBQ3JCLE1BQU0sd0NBQXdDLENBQUM7QUFFaEQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FDeEIsUUFBZ0IsRUFDaEIsS0FBYSxFQUNiLEtBQWMsRUFDRCxFQUFFO0lBQ2YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDM0QsT0FBTyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FDM0IsUUFBZ0IsRUFDaEIsS0FBYSxFQUNiLEtBQWMsRUFDRCxFQUFFO0lBQ2YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDM0QsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixRQUFnQixFQUNoQixLQUFhLEVBQ2IsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZOb3RWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZWYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byB0aGUgY29udHJvbHMgd2l0aCBhIG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGVcclxuICogZmlyc3QgcGFyYW1ldGVyIGlmIHRoZSBjb250cm9sIHdpdGggYSBuYW1lIHNwZWNpZmllZCBpbiB0aGUgc2Vjb25kIHBhcmFtZXRlclxyXG4gKiBoYXMgbm8gdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSByZXF1aXJlZCAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgdG8gcmVjZWl2ZSB0aGUgcmVxdWlyZWQgZXJyb3JcclxuICogQHBhcmFtIGNoZWNrICAgICAgICAgICAgICAgICAgICAgICAtIGNvbnRyb2wgbmFtZSB3aG8ncyB2YWx1ZSBuZWVkcyB0byBiZSBjaGVja2VkXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBlcnJvciBtZXNzYWdlIC0gb3B0aW9uYWwgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRJZiA9IChcclxuICByZXF1aXJlZDogc3RyaW5nLFxyXG4gIGNoZWNrOiBzdHJpbmcsXHJcbiAgZXJyb3I/OiBzdHJpbmdcclxuKTogVmFsaWRhdG9yRm4gPT4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkSWZWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVxdWlyZWQsIGNoZWNrLCBlcnJvciB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byB0aGUgY29udHJvbHMgd2l0aCBhIG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGVcclxuICogZmlyc3QgcGFyYW1ldGVyIGlmIHRoZSBjb250cm9sIHdpdGggYSBuYW1lIHNwZWNpZmllZCBpbiB0aGUgc2Vjb25kIHBhcmFtZXRlclxyXG4gKiBoYXMgYSB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHJlcXVpcmVkICAgICAgICAgICAgICAgICAgICAtIGNvbnRyb2wgbmFtZSB0byByZWNlaXZlIHRoZSByZXF1aXJlZCBlcnJvclxyXG4gKiBAcGFyYW0gY2hlY2sgICAgICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHdobydzIHZhbHVlIG5lZWRzIHRvIGJlIGNoZWNrZWRcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZElmTm90ID0gKFxyXG4gIHJlcXVpcmVkOiBzdHJpbmcsXHJcbiAgY2hlY2s6IHN0cmluZyxcclxuICBlcnJvcj86IHN0cmluZ1xyXG4pOiBWYWxpZGF0b3JGbiA9PiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRJZk5vdFZhbGlkYXRpb24oY29udHJvbCwgeyByZXF1aXJlZCwgY2hlY2ssIGVycm9yIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIGJvdGggY29udHJvbHMgd2hvJ3MgbmFtZXMgYXJlIHNwZWNpZmllZCBpZiBuZXRoZXIgb25lXHJcbiAqIGhhcyBhIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVxdWlyZWQgICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgZmlyc3QgY29udHJvbFxyXG4gKiBAcGFyYW0gY2hlY2sgICAgICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2xcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZEV0aGVyID0gKFxyXG4gIHJlcXVpcmVkOiBzdHJpbmcsXHJcbiAgY2hlY2s6IHN0cmluZyxcclxuICBlcnJvcj86IHN0cmluZ1xyXG4pOiBWYWxpZGF0b3JGbiA9PiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRFdGhlclZhbGlkYXRpb24oY29udHJvbCwgeyByZXF1aXJlZCwgY2hlY2ssIGVycm9yIH0pO1xyXG4gIH07XHJcbn07XHJcbiJdfQ==