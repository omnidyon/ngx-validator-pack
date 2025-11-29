/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';
export const AddressChecks = () => checkFactory([
    {
        validator: regexpValidator,
        args: [/(\d{1,})/, '!!'],
        errorName: 'streetNumber',
        errorMsg: 'Street number.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,})\s+[a-zA-Z0-9\s]+,?/, '!!'],
        errorName: 'streetName',
        errorMsg: 'Street name.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,})\s+[a-zA-Z0-9\s]+,?\s+[a-zA-Z\s]+,?/, '!!'],
        errorName: 'city',
        errorMsg: 'City.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z\s]+(\,)? [A-Z]{2}/, '!!'],
        errorName: 'state',
        errorMsg: 'State.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z\s]+(\,)? [A-Z]{2} [0-9]{5,6}/, '!!'],
        errorName: 'zip',
        errorMsg: 'ZipCode.',
    },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jaGVja3MvYWRkcmVzcy1jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUV6RixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFLENBQ2hDLFlBQVksQ0FBQztJQUNYO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUM7UUFDM0MsU0FBUyxFQUFFLFlBQVk7UUFDdkIsUUFBUSxFQUFFLGNBQWM7S0FDekI7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQztRQUMzRCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsT0FBTztLQUNsQjtJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsd0RBQXdELEVBQUUsSUFBSSxDQUFDO1FBQ3RFLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxtRUFBbUUsRUFBRSxJQUFJLENBQUM7UUFDakYsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLFVBQVU7S0FDckI7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY2hlY2tGYWN0b3J5IH0gZnJvbSAnLi4vaGVscGVycy9jaGVjay1mYWN0b3J5JztcclxuaW1wb3J0IHsgcmVnZXhwVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9yZWFjdGl2ZS1mb3Jtcy9yZWFjdGl2ZS1mb3Jtcy12YWxpZGF0b3JzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRyZXNzQ2hlY2tzID0gKCkgPT5cclxuICBjaGVja0ZhY3RvcnkoW1xyXG4gICAge1xyXG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgYXJnczogWy8oXFxkezEsfSkvLCAnISEnXSxcclxuICAgICAgZXJyb3JOYW1lOiAnc3RyZWV0TnVtYmVyJyxcclxuICAgICAgZXJyb3JNc2c6ICdTdHJlZXQgbnVtYmVyLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgYXJnczogWy8oXFxkezEsfSlcXHMrW2EtekEtWjAtOVxcc10rLD8vLCAnISEnXSxcclxuICAgICAgZXJyb3JOYW1lOiAnc3RyZWV0TmFtZScsXHJcbiAgICAgIGVycm9yTXNnOiAnU3RyZWV0IG5hbWUuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxyXG4gICAgICBhcmdzOiBbLyhcXGR7MSx9KVxccytbYS16QS1aMC05XFxzXSssP1xccytbYS16QS1aXFxzXSssPy8sICchISddLFxyXG4gICAgICBlcnJvck5hbWU6ICdjaXR5JyxcclxuICAgICAgZXJyb3JNc2c6ICdDaXR5LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgYXJnczogWy8oXFxkezEsfSkgW2EtekEtWjAtOVxcc10rKFxcLCk/IFthLXpBLVpcXHNdKyhcXCwpPyBbQS1aXXsyfS8sICchISddLFxyXG4gICAgICBlcnJvck5hbWU6ICdzdGF0ZScsXHJcbiAgICAgIGVycm9yTXNnOiAnU3RhdGUuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxyXG4gICAgICBhcmdzOiBbLyhcXGR7MSx9KSBbYS16QS1aMC05XFxzXSsoXFwsKT8gW2EtekEtWlxcc10rKFxcLCk/IFtBLVpdezJ9IFswLTldezUsNn0vLCAnISEnXSxcclxuICAgICAgZXJyb3JOYW1lOiAnemlwJyxcclxuICAgICAgZXJyb3JNc2c6ICdaaXBDb2RlLicsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4iXX0=