/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 * @description
 * An decorator which handles the input value in directives which extend the
 * {@link RegExpValidatorDirective} and have an expected input in the form of
 * {@link RegExpValidationInput}.
 *
 * It will populate the error and the errorName values passed to it if it doesn't find
 * them in the input value.
 * @param regexp                      - Regular expression to check
 * @param errorName                   - parameter representing error name
 * @param error                       - parameter representing error value
 */
export function RegExpValidatorInput(regexp, errorName, error) {
    return function (target, propertyKey) {
        let original = target[propertyKey];
        let newData = {
            ...original
        };
        const getter = function () {
            newData = {
                regExp: regexp,
                errorName: newData.errorName ?? errorName,
                error: newData.error ?? error
            };
            return newData;
        };
        const setter = function (val) {
            newData = val;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvZGVjb3JhdG9ycy92YWxpZGF0b3ItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxNQUFjLEVBQ2QsU0FBaUIsRUFDakIsS0FBYTtJQUViLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBbUI7UUFFL0MsSUFBSSxRQUFRLEdBQXdCLE1BQU0sQ0FBQyxXQUF3QixDQUFDLENBQUM7UUFFckUsSUFBSSxPQUFPLEdBQXdCO1lBQ2xDLEdBQUcsUUFBUTtTQUNYLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRztZQUNaLE9BQWlDLEdBQUc7Z0JBQ25DLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLFNBQVM7Z0JBQ3pDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUs7YUFDOUIsQ0FBQTtZQUNELE9BQU8sT0FBZ0MsQ0FBQztRQUMxQyxDQUFDLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxVQUFVLEdBQTBCO1lBQ2pELE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3pDLEdBQUcsRUFBRSxNQUFNO1lBQ1gsR0FBRyxFQUFFLE1BQU07U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJhc2VWYWxpZGF0aW9uSW5wdXQsIFJlZ0V4cFZhbGlkYXRpb25JbnB1dCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RpcmVjdGl2ZS1pbnB1dC5pbnRlcmZhY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFuIGRlY29yYXRvciB3aGljaCBoYW5kbGVzIHRoZSBpbnB1dCB2YWx1ZSBpbiBkaXJlY3RpdmVzIHdoaWNoIGV4dGVuZCB0aGUgXHJcbiAqIHtAbGluayBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmV9IGFuZCBoYXZlIGFuIGV4cGVjdGVkIGlucHV0IGluIHRoZSBmb3JtIG9mIFxyXG4gKiB7QGxpbmsgUmVnRXhwVmFsaWRhdGlvbklucHV0fS5cclxuICogXHJcbiAqIEl0IHdpbGwgcG9wdWxhdGUgdGhlIGVycm9yIGFuZCB0aGUgZXJyb3JOYW1lIHZhbHVlcyBwYXNzZWQgdG8gaXQgaWYgaXQgZG9lc24ndCBmaW5kIFxyXG4gKiB0aGVtIGluIHRoZSBpbnB1dCB2YWx1ZS5cclxuICogQHBhcmFtIHJlZ2V4cCAgICAgICAgICAgICAgICAgICAgICAtIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBjaGVja1xyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgcmVnZXhwOiBSZWdFeHAsXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcsXHJcbiAgZXJyb3I6IHN0cmluZ1xyXG4pOiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpID0+IHZvaWQge1xyXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHR5cGUgT2JqZWN0S2V5ID0ga2V5b2YgdHlwZW9mIHRhcmdldDtcclxuICAgIGxldCBvcmlnaW5hbDogQmFzZVZhbGlkYXRpb25JbnB1dCA9IHRhcmdldFtwcm9wZXJ0eUtleSBhcyBPYmplY3RLZXldO1xyXG4gICAgXHJcbiAgICBsZXQgbmV3RGF0YTogQmFzZVZhbGlkYXRpb25JbnB1dCA9IHtcclxuICAgICAuLi5vcmlnaW5hbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXR0ZXIgPSBmdW5jdGlvbiAoKTogUmVnRXhwVmFsaWRhdGlvbklucHV0IHtcclxuICAgICAgKG5ld0RhdGEgYXMgUmVnRXhwVmFsaWRhdGlvbklucHV0KSA9IHtcclxuICAgICAgICByZWdFeHA6IHJlZ2V4cCxcclxuICAgICAgICBlcnJvck5hbWU6IG5ld0RhdGEuZXJyb3JOYW1lID8/IGVycm9yTmFtZSxcclxuICAgICAgICBlcnJvcjogbmV3RGF0YS5lcnJvciA/PyBlcnJvclxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdEYXRhIGFzIFJlZ0V4cFZhbGlkYXRpb25JbnB1dDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0dGVyID0gZnVuY3Rpb24gKHZhbDogUmVnRXhwVmFsaWRhdGlvbklucHV0KSB7XHJcbiAgICAgIG5ld0RhdGEgPSB2YWw7XHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgIGdldDogZ2V0dGVyLFxyXG4gICAgICBzZXQ6IHNldHRlcixcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIl19