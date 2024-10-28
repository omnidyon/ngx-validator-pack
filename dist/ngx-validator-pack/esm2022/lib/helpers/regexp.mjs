/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 */
export const test = (regexp, value, logic) => {
    const operations = {
        '!': () => !regexp.test(value),
        '!!': () => regexp.test(value),
        'match': () => !!regexp.exec(value)
    };
    return operations[logic]();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvaGVscGVycy9yZWdleHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsS0FBYSxFQUFFLEtBQWlCLEVBQVcsRUFBRTtJQUNoRixNQUFNLFVBQVUsR0FBRztRQUNqQixHQUFHLEVBQUUsR0FBWSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLEVBQUUsR0FBWSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkMsT0FBTyxFQUFFLEdBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM3QyxDQUFDO0lBRUYsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRlc3QgPSAocmVnZXhwOiBSZWdFeHAsIHZhbHVlOiBzdHJpbmcsIGxvZ2ljOiAnIScgfCBcIiEhXCIpOiBib29sZWFuID0+IHtcclxuICBjb25zdCBvcGVyYXRpb25zID0ge1xyXG4gICAgJyEnOiAoKTogYm9vbGVhbiA9PiAhcmVnZXhwLnRlc3QodmFsdWUpLFxyXG4gICAgJyEhJzogKCk6IGJvb2xlYW4gPT4gcmVnZXhwLnRlc3QodmFsdWUpLFxyXG4gICAgJ21hdGNoJzogKCk6IGJvb2xlYW4gPT4gISFyZWdleHAuZXhlYyh2YWx1ZSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gb3BlcmF0aW9uc1tsb2dpY10oKTtcclxufSJdfQ==