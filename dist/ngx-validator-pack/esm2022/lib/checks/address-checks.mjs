/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from "../helpers/check-factory";
import { regexpValidator } from "../validators/reactive-forms/reactive-forms-validators";
export const AddressChecks = () => checkFactory([
    {
        validator: regexpValidator,
        args: [/(\d{1,})/, '!!'],
        errorName: 'streetNumber',
        errorMsg: 'Street number.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)/, '!!'],
        errorName: 'streetName',
        errorMsg: 'Street name.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)/, '!!'],
        errorName: 'city',
        errorMsg: 'City.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2}/, '!!'],
        errorName: 'state',
        errorMsg: 'State.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}/, '!!'],
        errorName: 'zip',
        errorMsg: 'ZipCode.',
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jaGVja3MvYWRkcmVzcy1jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUl6RixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzVDO1FBQ0ksU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsZ0JBQWdCO0tBQzdCO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUM7UUFDM0MsU0FBUyxFQUFFLFlBQVk7UUFDdkIsUUFBUSxFQUFFLGNBQWM7S0FDM0I7SUFDRDtRQUNJLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQztRQUMxRCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0ksU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsc0RBQXNELEVBQUUsSUFBSSxDQUFDO1FBQ3BFLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxpRUFBaUUsRUFBRSxJQUFJLENBQUM7UUFDL0UsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLFVBQVU7S0FDdkI7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY2hlY2tGYWN0b3J5IH0gZnJvbSBcIi4uL2hlbHBlcnMvY2hlY2stZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyByZWdleHBWYWxpZGF0b3IgfSBmcm9tIFwiLi4vdmFsaWRhdG9ycy9yZWFjdGl2ZS1mb3Jtcy9yZWFjdGl2ZS1mb3Jtcy12YWxpZGF0b3JzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBZGRyZXNzQ2hlY2tzID0gKCkgPT4gY2hlY2tGYWN0b3J5KFtcclxuICAgIHtcclxuICAgICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgICBhcmdzOiBbLyhcXGR7MSx9KS8sICchISddLFxyXG4gICAgICAgIGVycm9yTmFtZTogJ3N0cmVldE51bWJlcicsXHJcbiAgICAgICAgZXJyb3JNc2c6ICdTdHJlZXQgbnVtYmVyLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxyXG4gICAgICAgIGFyZ3M6IFsvKFxcZHsxLH0pIFthLXpBLVowLTlcXHNdKyhcXCwpLywgJyEhJ10sXHJcbiAgICAgICAgZXJyb3JOYW1lOiAnc3RyZWV0TmFtZScsXHJcbiAgICAgICAgZXJyb3JNc2c6ICdTdHJlZXQgbmFtZS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgICBhcmdzOiBbLyhcXGR7MSx9KSBbYS16QS1aMC05XFxzXSsoXFwsKT8gW2EtekEtWl0rKFxcLCkvLCAnISEnXSxcclxuICAgICAgICBlcnJvck5hbWU6ICdjaXR5JyxcclxuICAgICAgICBlcnJvck1zZzogJ0NpdHkuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXHJcbiAgICAgICAgYXJnczogWy8oXFxkezEsfSkgW2EtekEtWjAtOVxcc10rKFxcLCk/IFthLXpBLVpdKyhcXCwpPyBbQS1aXXsyfS8sICchISddLFxyXG4gICAgICAgIGVycm9yTmFtZTogJ3N0YXRlJyxcclxuICAgICAgICBlcnJvck1zZzogJ1N0YXRlLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxyXG4gICAgICAgIGFyZ3M6IFsvKFxcZHsxLH0pIFthLXpBLVowLTlcXHNdKyhcXCwpPyBbYS16QS1aXSsoXFwsKT8gW0EtWl17Mn0gWzAtOV17NSw2fS8sICchISddLFxyXG4gICAgICAgIGVycm9yTmFtZTogJ3ppcCcsXHJcbiAgICAgICAgZXJyb3JNc2c6ICdaaXBDb2RlLicsXHJcbiAgICB9XHJcbl0pOyJdfQ==