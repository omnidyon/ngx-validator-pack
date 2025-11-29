/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from '../helpers/check-factory';
import { regexpValidator } from '../validators/reactive-forms/reactive-forms-validators';
export const EmailChecks = () => checkFactory([
    {
        validator: regexpValidator,
        args: [/@/, '!!'],
        errorName: 'hasAt',
        errorMsg: 'Email must contain an "@" symbol.',
    },
    {
        validator: regexpValidator,
        args: [/^[^@\s]+@/, '!!'],
        errorName: 'localPart',
        errorMsg: 'Email must have text before "@".',
    },
    {
        validator: regexpValidator,
        args: [/@[^@\s]+$/, '!!'],
        errorName: 'domainPart',
        errorMsg: 'Email must have a domain after "@".',
    },
    {
        validator: regexpValidator,
        args: [/@.+\./, '!!'],
        errorName: 'hasDot',
        errorMsg: 'Email domain must contain a dot (".").',
    },
    {
        validator: regexpValidator,
        args: [/\.[A-Za-z]{2,}$/, '!!'],
        errorName: 'tldLength',
        errorMsg: 'Email TLD must be at least 2 characters.',
    },
    {
        validator: regexpValidator,
        args: [/^\S*$/, '!!'],
        errorName: 'noSpaces',
        errorMsg: 'Email must not contain spaces.',
    },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY2hlY2tzL2VtYWlsLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRXpGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDNUM7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ2pCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxtQ0FBbUM7S0FDOUM7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7UUFDekIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLGtDQUFrQztLQUM3QztJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUN6QixTQUFTLEVBQUUsWUFBWTtRQUN2QixRQUFRLEVBQUUscUNBQXFDO0tBQ2hEO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSx3Q0FBd0M7S0FDbkQ7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQztRQUMvQixTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsMENBQTBDO0tBQ3JEO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFFBQVEsRUFBRSxnQ0FBZ0M7S0FDM0M7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBjaGVja0ZhY3RvcnkgfSBmcm9tICcuLi9oZWxwZXJzL2NoZWNrLWZhY3RvcnknO1xuaW1wb3J0IHsgcmVnZXhwVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9yZWFjdGl2ZS1mb3Jtcy9yZWFjdGl2ZS1mb3Jtcy12YWxpZGF0b3JzJztcblxuZXhwb3J0IGNvbnN0IEVtYWlsQ2hlY2tzID0gKCkgPT4gY2hlY2tGYWN0b3J5KFtcbiAge1xuICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgIGFyZ3M6IFsvQC8sICchISddLFxuICAgIGVycm9yTmFtZTogJ2hhc0F0JyxcbiAgICBlcnJvck1zZzogJ0VtYWlsIG11c3QgY29udGFpbiBhbiBcIkBcIiBzeW1ib2wuJyxcbiAgfSxcbiAge1xuICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgIGFyZ3M6IFsvXlteQFxcc10rQC8sICchISddLFxuICAgIGVycm9yTmFtZTogJ2xvY2FsUGFydCcsXG4gICAgZXJyb3JNc2c6ICdFbWFpbCBtdXN0IGhhdmUgdGV4dCBiZWZvcmUgXCJAXCIuJyxcbiAgfSxcbiAge1xuICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgIGFyZ3M6IFsvQFteQFxcc10rJC8sICchISddLFxuICAgIGVycm9yTmFtZTogJ2RvbWFpblBhcnQnLFxuICAgIGVycm9yTXNnOiAnRW1haWwgbXVzdCBoYXZlIGEgZG9tYWluIGFmdGVyIFwiQFwiLicsXG4gIH0sXG4gIHtcbiAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICBhcmdzOiBbL0AuK1xcLi8sICchISddLFxuICAgIGVycm9yTmFtZTogJ2hhc0RvdCcsXG4gICAgZXJyb3JNc2c6ICdFbWFpbCBkb21haW4gbXVzdCBjb250YWluIGEgZG90IChcIi5cIikuJyxcbiAgfSxcbiAge1xuICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgIGFyZ3M6IFsvXFwuW0EtWmEtel17Mix9JC8sICchISddLFxuICAgIGVycm9yTmFtZTogJ3RsZExlbmd0aCcsXG4gICAgZXJyb3JNc2c6ICdFbWFpbCBUTEQgbXVzdCBiZSBhdCBsZWFzdCAyIGNoYXJhY3RlcnMuJyxcbiAgfSxcbiAge1xuICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgIGFyZ3M6IFsvXlxcUyokLywgJyEhJ10sXG4gICAgZXJyb3JOYW1lOiAnbm9TcGFjZXMnLFxuICAgIGVycm9yTXNnOiAnRW1haWwgbXVzdCBub3QgY29udGFpbiBzcGFjZXMuJyxcbiAgfSxcbl0pO1xuIl19