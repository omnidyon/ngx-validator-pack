/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';
export const SlugChecks = () => checkFactory([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Z3MtY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY2hlY2tzL3NsdWdzLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRXpGLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FDN0IsWUFBWSxDQUFDO0lBQ1gsK0NBQStDO0lBQy9DO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztRQUM1QixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUseURBQXlEO0tBQ3BFO0lBRUQsbUJBQW1CO0lBQ25CO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUN6QixTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsMkNBQTJDO0tBQ3REO0lBRUQsK0JBQStCO0lBQy9CO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUNqQixTQUFTLEVBQUUsZUFBZTtRQUMxQixRQUFRLEVBQUUsZ0NBQWdDO0tBQzNDO0lBRUQsNkJBQTZCO0lBQzdCO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUNqQixTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFFBQVEsRUFBRSw4QkFBOEI7S0FDekM7SUFFRCx3Q0FBd0M7SUFDeEM7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ2pCLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFFBQVEsRUFBRSxzQ0FBc0M7S0FDakQ7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBjaGVja0ZhY3RvcnkgfSBmcm9tICcuLi9oZWxwZXJzL2NoZWNrLWZhY3RvcnknO1xuaW1wb3J0IHsgcmVnZXhwVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9yZWFjdGl2ZS1mb3Jtcy9yZWFjdGl2ZS1mb3Jtcy12YWxpZGF0b3JzJztcblxuZXhwb3J0IGNvbnN0IFNsdWdDaGVja3MgPSAoKSA9PlxuICBjaGVja0ZhY3RvcnkoW1xuICAgIC8vIOKclCBvbmx5IGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzIGFuZCBkYXNoZXNcbiAgICB7XG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgIGFyZ3M6IFsvXlthLXowLTktXSskLywgJyEhJ10sXG4gICAgICBlcnJvck5hbWU6ICdhbGxvd2VkQ2hhcnMnLFxuICAgICAgZXJyb3JNc2c6ICdPbmx5IGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzIGFuZCBkYXNoZXMgYXJlIGFsbG93ZWQuJyxcbiAgICB9LFxuXG4gICAgLy8g4pyUIG1pbi9tYXggbGVuZ3RoXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbL14uezMsNTB9JC8sICchISddLFxuICAgICAgZXJyb3JOYW1lOiAnbGVuZ3RoJyxcbiAgICAgIGVycm9yTXNnOiAnU2x1ZyBtdXN0IGJlIGJldHdlZW4gMyBhbmQgNTAgY2hhcmFjdGVycy4nLFxuICAgIH0sXG5cbiAgICAvLyDinJYgbXVzdCBOT1Qgc3RhcnQgd2l0aCBhIGRhc2hcbiAgICB7XG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgIGFyZ3M6IFsvXi0vLCAnISddLFxuICAgICAgZXJyb3JOYW1lOiAnbm9MZWFkaW5nRGFzaCcsXG4gICAgICBlcnJvck1zZzogJ1NsdWcgY2Fubm90IHN0YXJ0IHdpdGggYSBkYXNoLicsXG4gICAgfSxcblxuICAgIC8vIOKcliBtdXN0IE5PVCBlbmQgd2l0aCBhIGRhc2hcbiAgICB7XG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgIGFyZ3M6IFsvLSQvLCAnISddLFxuICAgICAgZXJyb3JOYW1lOiAnbm9UcmFpbGluZ0Rhc2gnLFxuICAgICAgZXJyb3JNc2c6ICdTbHVnIGNhbm5vdCBlbmQgd2l0aCBhIGRhc2guJyxcbiAgICB9LFxuXG4gICAgLy8g4pyWIG11c3QgTk9UIGNvbnRhaW4gY29uc2VjdXRpdmUgZGFzaGVzXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbLy0tLywgJyEnXSxcbiAgICAgIGVycm9yTmFtZTogJ25vRG91YmxlRGFzaCcsXG4gICAgICBlcnJvck1zZzogJ1NsdWcgY2Fubm90IGNvbnRhaW4gcmVwZWF0ZWQgZGFzaGVzLicsXG4gICAgfSxcbiAgXSk7XG4iXX0=