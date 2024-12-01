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
export const compare = (num1, num2, comparison) => {
    const operations = {
        '<': (a, b) => a < b,
        '>': (a, b) => a > b,
        '==': (a, b) => a == b,
        '===': (a, b) => a === b,
        '<=': (a, b) => a <= b,
        '>=': (a, b) => a >= b,
    };
    return operations[comparison](num1, num2);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2hlbHBlcnMvbnVtYmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsVUFBZ0MsRUFBVyxFQUFFO0lBQy9GLE1BQU0sVUFBVSxHQUFHO1FBQ2YsR0FBRyxFQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDN0MsR0FBRyxFQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxFQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsS0FBSyxFQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxFQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsSUFBSSxFQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDbEQsQ0FBQTtJQUNELE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBDb21wYXJpc29uT3BlcmF0aW9ucyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgY29tcGFyZSA9IChudW0xOiBudW1iZXIsIG51bTI6IG51bWJlciwgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnMpOiBib29sZWFuID0+IHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IHtcbiAgICAgICc8JzogKGE6IG51bWJlciwgYjogbnVtYmVyKTogYm9vbGVhbiA9PiBhIDwgYixcbiAgICAgICc+JzogKGE6IG51bWJlciwgYjogbnVtYmVyKTogYm9vbGVhbiA9PiBhID4gYixcbiAgICAgICc9PSc6IChhOiBudW1iZXIsIGI6IG51bWJlcik6IGJvb2xlYW4gPT4gYSA9PSBiLFxuICAgICAgJz09PSc6IChhOiBudW1iZXIsIGI6IG51bWJlcik6IGJvb2xlYW4gPT4gYSA9PT0gYixcbiAgICAgICc8PSc6IChhOiBudW1iZXIsIGI6IG51bWJlcik6IGJvb2xlYW4gPT4gYSA8PSBiLFxuICAgICAgJz49JzogKGE6IG51bWJlciwgYjogbnVtYmVyKTogYm9vbGVhbiA9PiBhID49IGIsXG4gIH1cbiAgcmV0dXJuIG9wZXJhdGlvbnNbY29tcGFyaXNvbl0obnVtMSwgbnVtMik7XG59Il19