/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';
export const UsernameChecks = () => checkFactory([
    // must contain at least one letter
    {
        validator: regexpValidator,
        args: [/[A-Za-z]/, '!!'],
        errorName: 'hasLetter',
        errorMsg: 'Username must contain at least one letter.',
    },
    // only letters, numbers and underscore
    {
        validator: regexpValidator,
        args: [/^[A-Za-z0-9_]+$/, '!!'],
        errorName: 'allowedChars',
        errorMsg: 'Username may only contain letters, numbers, and underscores.',
    },
    // length between 3 and 20
    {
        validator: regexpValidator,
        args: [/^.{3,20}$/, '!!'],
        errorName: 'length',
        errorMsg: 'Username must be between 3 and 20 characters.',
    },
    // cannot start or end with underscore
    {
        validator: regexpValidator,
        args: [/^(?!_)(?!.*_$).*$/, '!!'],
        errorName: 'noEdgeUnderscore',
        errorMsg: 'Username cannot start or end with an underscore.',
    },
    // no double underscore
    {
        validator: regexpValidator,
        args: [/^(?!.*__).*$/, '!!'],
        errorName: 'noDoubleUnderscore',
        errorMsg: 'Username cannot contain consecutive underscores.',
    },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcm5hbWUtY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY2hlY2tzL3VzZXJuYW1lLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRXpGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDL0MsbUNBQW1DO0lBQ25DO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsNENBQTRDO0tBQ3ZEO0lBQ0QsdUNBQXVDO0lBQ3ZDO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO1FBQy9CLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFFBQVEsRUFBRSw4REFBOEQ7S0FDekU7SUFDRCwwQkFBMEI7SUFDMUI7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1FBQ3pCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSwrQ0FBK0M7S0FDMUQ7SUFDRCxzQ0FBc0M7SUFDdEM7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUM7UUFDakMsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixRQUFRLEVBQUUsa0RBQWtEO0tBQzdEO0lBQ0QsdUJBQXVCO0lBQ3ZCO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztRQUM1QixTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLFFBQVEsRUFBRSxrREFBa0Q7S0FDN0Q7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBjaGVja0ZhY3RvcnkgfSBmcm9tICcuLi9oZWxwZXJzL2NoZWNrLWZhY3RvcnknO1xuaW1wb3J0IHsgcmVnZXhwVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9yZWFjdGl2ZS1mb3Jtcy9yZWFjdGl2ZS1mb3Jtcy12YWxpZGF0b3JzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJuYW1lQ2hlY2tzID0gKCkgPT4gY2hlY2tGYWN0b3J5KFtcbiAgLy8gbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBsZXR0ZXJcbiAge1xuICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgIGFyZ3M6IFsvW0EtWmEtel0vLCAnISEnXSxcbiAgICBlcnJvck5hbWU6ICdoYXNMZXR0ZXInLFxuICAgIGVycm9yTXNnOiAnVXNlcm5hbWUgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBsZXR0ZXIuJyxcbiAgfSxcbiAgLy8gb25seSBsZXR0ZXJzLCBudW1iZXJzIGFuZCB1bmRlcnNjb3JlXG4gIHtcbiAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICBhcmdzOiBbL15bQS1aYS16MC05X10rJC8sICchISddLFxuICAgIGVycm9yTmFtZTogJ2FsbG93ZWRDaGFycycsXG4gICAgZXJyb3JNc2c6ICdVc2VybmFtZSBtYXkgb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGFuZCB1bmRlcnNjb3Jlcy4nLFxuICB9LFxuICAvLyBsZW5ndGggYmV0d2VlbiAzIGFuZCAyMFxuICB7XG4gICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgYXJnczogWy9eLnszLDIwfSQvLCAnISEnXSxcbiAgICBlcnJvck5hbWU6ICdsZW5ndGgnLFxuICAgIGVycm9yTXNnOiAnVXNlcm5hbWUgbXVzdCBiZSBiZXR3ZWVuIDMgYW5kIDIwIGNoYXJhY3RlcnMuJyxcbiAgfSxcbiAgLy8gY2Fubm90IHN0YXJ0IG9yIGVuZCB3aXRoIHVuZGVyc2NvcmVcbiAge1xuICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgIGFyZ3M6IFsvXig/IV8pKD8hLipfJCkuKiQvLCAnISEnXSxcbiAgICBlcnJvck5hbWU6ICdub0VkZ2VVbmRlcnNjb3JlJyxcbiAgICBlcnJvck1zZzogJ1VzZXJuYW1lIGNhbm5vdCBzdGFydCBvciBlbmQgd2l0aCBhbiB1bmRlcnNjb3JlLicsXG4gIH0sXG4gIC8vIG5vIGRvdWJsZSB1bmRlcnNjb3JlXG4gIHtcbiAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICBhcmdzOiBbL14oPyEuKl9fKS4qJC8sICchISddLFxuICAgIGVycm9yTmFtZTogJ25vRG91YmxlVW5kZXJzY29yZScsXG4gICAgZXJyb3JNc2c6ICdVc2VybmFtZSBjYW5ub3QgY29udGFpbiBjb25zZWN1dGl2ZSB1bmRlcnNjb3Jlcy4nLFxuICB9LFxuXSk7XG4iXX0=