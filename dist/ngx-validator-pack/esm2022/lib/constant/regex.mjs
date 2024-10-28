/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
// @internal Checks id an input in a format of Street number Street Name, City, State ZIP code
export const address = /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
// @internal Checks for date format YYYY-MM-dd
export const dateYYYY_MM_DD = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
// Checks for date format  dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY
// @internal with check for leap year
export const dateDD_MM_YYYY = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
// @internal Checks if input is an email
export const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// @internal Checks if input is in a IPv4 format
export const IPAddressV4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
// @internal Checks if input is in a IPv6 format
export const IPAddressV6 = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
// @internal Checks if input is in a IPv4 or IPv6 format
export const IPAddressV4AndV6 = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
// @internal Checks if an input consists of letters only
export const lettersOnly = /^[A-Za-z]+$/;
// @internal Checks if an input has letters 
export const hasLetters = /[a-zA-Z]/;
// @internal Checks if an input has lowercase letters 
export const hasLowercase = /[a-z]/;
// @internal Checks if an input has uppercase letters 
export const hasUppercase = /[A-Z]/;
// @internal Checks if the input consists of letters, periods, hyphens and spaces
export const lettersPeriodsHyphensAndSpaces = /^[a-zA-Z\s.-]+$/;
// @internal Checks if input contains < or >;
export const greaterOrLessThen = /(?=.*[<>])/;
// @internal Checks if input contains any special characters
export const noSpecial = /^[A-Za-z0-9 ]+$/;
// @internal Checks if an input consists of numbers only
export const numbersOnly = /^\d+$/;
// @internal Checks if an input has numbers
export const hasNumbers = /\d/;
// @internal Checks if input is in passport format
export const passport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
// Checks if input consist of at least 1 lowercase letter, 1 uppercase letter,
// @internal 1 number, 1 special character and has length of at least 8 characters
export const passwordStrength = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
// @internal Checks for a (000) 000 0000 phone format
export const phoneNumber = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
// @internal Checks for a single space character
export const singleSpace = /[\s]/;
// @internal Restrict only spaces, spaces at the beginning and end of the field
export const spaceRestriction = /^\S$|^\S[\s\S]*\S$/;
// @internal Checks if input is in an Social Security Number format
export const ssn = /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/;
// @internal Checks for Time Format HH:MM 12-hour with optional leading 0
export const timeHH_MM_12 = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
// @internal Checks for Time Format HH:MM 24-hour with optional leading 0
export const timeHH_MM_24 = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
// @internal Checks for Time Format HH:MM:SS 24-hour
export const timeHH_MM_SS_24 = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/;
// @internal Checks if input is a url
export const url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
// @internal Checks of a zip code in formats 00000 or 00000-0000
export const zipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb25zdGFudC9yZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCw4RkFBOEY7QUFDOUYsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLG1FQUFtRSxDQUFDO0FBQzNGLDhDQUE4QztBQUM5QyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQ3pCLG1EQUFtRCxDQUFDO0FBQ3RELGlFQUFpRTtBQUNqRSxxQ0FBcUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUN6QixzVUFBc1UsQ0FBQztBQUN6VSx3Q0FBd0M7QUFDeEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUNoQixzSEFBc0gsQ0FBQztBQUN6SCxnREFBZ0Q7QUFDaEQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUN0QiwyR0FBMkcsQ0FBQztBQUM5RyxnREFBZ0Q7QUFDaEQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUN0QixxcEJBQXFwQixDQUFDO0FBQ3hwQix3REFBd0Q7QUFDeEQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQzNCLGlyQ0FBaXJDLENBQUM7QUFDcHJDLHdEQUF3RDtBQUN4RCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO0FBQ3pDLDRDQUE0QztBQUM1QyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ3JDLHNEQUFzRDtBQUN0RCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDO0FBQ3BDLHNEQUFzRDtBQUN0RCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDO0FBQ3BDLGlGQUFpRjtBQUNqRixNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBRyxpQkFBaUIsQ0FBQztBQUNoRSw2Q0FBNkM7QUFDN0MsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDO0FBQzlDLDREQUE0RDtBQUM1RCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUM7QUFDM0Msd0RBQXdEO0FBQ3hELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDbkMsMkNBQTJDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDL0Isa0RBQWtEO0FBQ2xELE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxpQ0FBaUMsQ0FBQztBQUMxRCw4RUFBOEU7QUFDOUUsa0ZBQWtGO0FBQ2xGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUMzQixnR0FBZ0csQ0FBQztBQUNuRyxxREFBcUQ7QUFDckQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGtEQUFrRCxDQUFDO0FBQzlFLGdEQUFnRDtBQUNoRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLCtFQUErRTtBQUMvRSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztBQUNyRCxtRUFBbUU7QUFDbkUsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUNkLDBPQUEwTyxDQUFDO0FBQzdPLHlFQUF5RTtBQUN6RSxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsK0NBQStDLENBQUM7QUFDNUUseUVBQXlFO0FBQ3pFLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRywyQ0FBMkMsQ0FBQztBQUN4RSxvREFBb0Q7QUFDcEQsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUMxQixrREFBa0QsQ0FBQztBQUNyRCxxQ0FBcUM7QUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUNkLHVGQUF1RixDQUFDO0FBQzFGLGdFQUFnRTtBQUNoRSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuLy8gQGludGVybmFsIENoZWNrcyBpZCBhbiBpbnB1dCBpbiBhIGZvcm1hdCBvZiBTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZVxyXG5leHBvcnQgY29uc3QgYWRkcmVzcyA9IC9eKFxcZHsxLH0pIFthLXpBLVowLTlcXHNdKyhcXCwpPyBbYS16QS1aXSsoXFwsKT8gW0EtWl17Mn0gWzAtOV17NSw2fSQvO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGZvciBkYXRlIGZvcm1hdCBZWVlZLU1NLWRkXHJcbmV4cG9ydCBjb25zdCBkYXRlWVlZWV9NTV9ERCA9XHJcbiAgLyhbMTJdXFxkezN9LSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxMl1cXGR8M1swMV0pKS87XHJcbi8vIENoZWNrcyBmb3IgZGF0ZSBmb3JtYXQgIGRkLU1NLVlZWVkgb3IgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZXHJcbi8vIEBpbnRlcm5hbCB3aXRoIGNoZWNrIGZvciBsZWFwIHllYXJcclxuZXhwb3J0IGNvbnN0IGRhdGVERF9NTV9ZWVlZID1cclxuICAvXig/Oig/OjMxKFxcL3wtfFxcLikoPzowP1sxMzU3OF18MVswMl0pKVxcMXwoPzooPzoyOXwzMCkoXFwvfC18XFwuKSg/OjA/WzEsMy05XXwxWzAtMl0pXFwyKSkoPzooPzoxWzYtOV18WzItOV1cXGQpP1xcZHsyfSkkfF4oPzoyOShcXC98LXxcXC4pMD8yXFwzKD86KD86KD86MVs2LTldfFsyLTldXFxkKT8oPzowWzQ4XXxbMjQ2OF1bMDQ4XXxbMTM1NzldWzI2XSl8KD86KD86MTZ8WzI0NjhdWzA0OF18WzM1NzldWzI2XSkwMCkpKSkkfF4oPzowP1sxLTldfDFcXGR8MlswLThdKShcXC98LXxcXC4pKD86KD86MD9bMS05XSl8KD86MVswLTJdKSlcXDQoPzooPzoxWzYtOV18WzItOV1cXGQpP1xcZHsyfSkkLztcclxuLy8gQGludGVybmFsIENoZWNrcyBpZiBpbnB1dCBpcyBhbiBlbWFpbFxyXG5leHBvcnQgY29uc3QgZW1haWwgPVxyXG4gIC9eKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcclxuLy8gQGludGVybmFsIENoZWNrcyBpZiBpbnB1dCBpcyBpbiBhIElQdjQgZm9ybWF0XHJcbmV4cG9ydCBjb25zdCBJUEFkZHJlc3NWNCA9XHJcbiAgL14oKFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pXFwuKXszfShbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKSQvO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGlmIGlucHV0IGlzIGluIGEgSVB2NiBmb3JtYXRcclxuZXhwb3J0IGNvbnN0IElQQWRkcmVzc1Y2ID1cclxuICAvKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKS87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgaWYgaW5wdXQgaXMgaW4gYSBJUHY0IG9yIElQdjYgZm9ybWF0XHJcbmV4cG9ydCBjb25zdCBJUEFkZHJlc3NWNEFuZFY2ID1cclxuICAvKCheXFxzKigoKFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pXFwuKXszfShbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKSlcXHMqJCl8KF5cXHMqKCgoWzAtOUEtRmEtZl17MSw0fTopezd9KFswLTlBLUZhLWZdezEsNH18OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezZ9KDpbMC05QS1GYS1mXXsxLDR9fCgoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwyfSl8OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NH0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwzfSl8KCg6WzAtOUEtRmEtZl17MSw0fSk/OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezN9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNH0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsMn06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7Mn0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw1fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCwzfTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXsxfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDZ9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDR9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg6KCgoOlswLTlBLUZhLWZdezEsNH0pezEsN30pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsNX06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSkpKCUuKyk/XFxzKiQpKS87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgaWYgYW4gaW5wdXQgY29uc2lzdHMgb2YgbGV0dGVycyBvbmx5XHJcbmV4cG9ydCBjb25zdCBsZXR0ZXJzT25seSA9IC9eW0EtWmEtel0rJC87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgaWYgYW4gaW5wdXQgaGFzIGxldHRlcnMgXHJcbmV4cG9ydCBjb25zdCBoYXNMZXR0ZXJzID0gL1thLXpBLVpdLztcclxuLy8gQGludGVybmFsIENoZWNrcyBpZiBhbiBpbnB1dCBoYXMgbG93ZXJjYXNlIGxldHRlcnMgXHJcbmV4cG9ydCBjb25zdCBoYXNMb3dlcmNhc2UgPSAvW2Etel0vO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGlmIGFuIGlucHV0IGhhcyB1cHBlcmNhc2UgbGV0dGVycyBcclxuZXhwb3J0IGNvbnN0IGhhc1VwcGVyY2FzZSA9IC9bQS1aXS87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgaWYgdGhlIGlucHV0IGNvbnNpc3RzIG9mIGxldHRlcnMsIHBlcmlvZHMsIGh5cGhlbnMgYW5kIHNwYWNlc1xyXG5leHBvcnQgY29uc3QgbGV0dGVyc1BlcmlvZHNIeXBoZW5zQW5kU3BhY2VzID0gL15bYS16QS1aXFxzLi1dKyQvO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGlmIGlucHV0IGNvbnRhaW5zIDwgb3IgPjtcclxuZXhwb3J0IGNvbnN0IGdyZWF0ZXJPckxlc3NUaGVuID0gLyg/PS4qWzw+XSkvO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGlmIGlucHV0IGNvbnRhaW5zIGFueSBzcGVjaWFsIGNoYXJhY3RlcnNcclxuZXhwb3J0IGNvbnN0IG5vU3BlY2lhbCA9IC9eW0EtWmEtejAtOSBdKyQvO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGlmIGFuIGlucHV0IGNvbnNpc3RzIG9mIG51bWJlcnMgb25seVxyXG5leHBvcnQgY29uc3QgbnVtYmVyc09ubHkgPSAvXlxcZCskLztcclxuLy8gQGludGVybmFsIENoZWNrcyBpZiBhbiBpbnB1dCBoYXMgbnVtYmVyc1xyXG5leHBvcnQgY29uc3QgaGFzTnVtYmVycyA9IC9cXGQvO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGlmIGlucHV0IGlzIGluIHBhc3Nwb3J0IGZvcm1hdFxyXG5leHBvcnQgY29uc3QgcGFzc3BvcnQgPSAvXltBLVBSLVdZXVsxLTldXFxkXFxzP1xcZHs0fVsxLTldJC87XHJcbi8vIENoZWNrcyBpZiBpbnB1dCBjb25zaXN0IG9mIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLFxyXG4vLyBAaW50ZXJuYWwgMSBudW1iZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBsZW5ndGggb2YgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFN0cmVuZ3RoID1cclxuICAvKD89KC4qWzAtOV0pKSg/PS4qW1xcIUAjJCVeJiooKVxcXFxbXFxde31cXC1fKz1+YHw6O1wiJzw+LC4vP10pKD89LipbYS16XSkoPz0oLipbQS1aXSkpKD89KC4qKSkuezgsfS87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgZm9yIGEgKDAwMCkgMDAwIDAwMDAgcGhvbmUgZm9ybWF0XHJcbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlciA9IC9eKFxcKCk/WzItOV17MX1cXGR7Mn0oXFwpKT8oLXxcXHMpP1xcZHszfSgtfFxccylcXGR7NH0kLztcclxuLy8gQGludGVybmFsIENoZWNrcyBmb3IgYSBzaW5nbGUgc3BhY2UgY2hhcmFjdGVyXHJcbmV4cG9ydCBjb25zdCBzaW5nbGVTcGFjZSA9IC9bXFxzXS87XHJcbi8vIEBpbnRlcm5hbCBSZXN0cmljdCBvbmx5IHNwYWNlcywgc3BhY2VzIGF0IHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0aGUgZmllbGRcclxuZXhwb3J0IGNvbnN0IHNwYWNlUmVzdHJpY3Rpb24gPSAvXlxcUyR8XlxcU1tcXHNcXFNdKlxcUyQvO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIGlmIGlucHV0IGlzIGluIGFuIFNvY2lhbCBTZWN1cml0eSBOdW1iZXIgZm9ybWF0XHJcbmV4cG9ydCBjb25zdCBzc24gPVxyXG4gIC9eKCg/ITIxOS0wOS05OTk5fDA3OC0wNS0xMTIwKSg/ITY2NnwwMDB8OVxcZHsyfSlcXGR7M30tKD8hMDApXFxkezJ9LSg/ITB7NH0pXFxkezR9KXwoKD8hMjE5IDA5IDk5OTl8MDc4IDA1IDExMjApKD8hNjY2fDAwMHw5XFxkezJ9KVxcZHszfSAoPyEwMClcXGR7Mn0gKD8hMHs0fSlcXGR7NH0pfCgoPyEyMTkwOTk5OTl8MDc4MDUxMTIwKSg/ITY2NnwwMDB8OVxcZHsyfSlcXGR7M30oPyEwMClcXGR7Mn0oPyEwezR9KVxcZHs0fSkkLztcclxuLy8gQGludGVybmFsIENoZWNrcyBmb3IgVGltZSBGb3JtYXQgSEg6TU0gMTItaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMFxyXG5leHBvcnQgY29uc3QgdGltZUhIX01NXzEyID0gLygoMVswLTJdfDA/WzEtOV0pOihbMC01XVswLTldKSA/KFtBYVBwXVtNbV0pKS87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgZm9yIFRpbWUgRm9ybWF0IEhIOk1NIDI0LWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDBcclxuZXhwb3J0IGNvbnN0IHRpbWVISF9NTV8yNCA9IC9eKFswLTldfDBbMC05XXwxWzAtOV18MlswLTNdKTpbMC01XVswLTldJC87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgZm9yIFRpbWUgRm9ybWF0IEhIOk1NOlNTIDI0LWhvdXJcclxuZXhwb3J0IGNvbnN0IHRpbWVISF9NTV9TU18yNCA9XHJcbiAgLyg/OlswMV1cXGR8MlswMTIzXSk6KD86WzAxMjM0NV1cXGQpOig/OlswMTIzNDVdXFxkKS87XHJcbi8vIEBpbnRlcm5hbCBDaGVja3MgaWYgaW5wdXQgaXMgYSB1cmxcclxuZXhwb3J0IGNvbnN0IHVybCA9XHJcbiAgLyhodHRwfGZ0cHxodHRwcyk6XFwvXFwvW1xcdy1dKyhcXC5bXFx3LV0rKSsoW1xcdy4sQD9ePSUmYW1wOzpcXC9+KyMtXSpbXFx3QD9ePSUmYW1wO1xcL34rIy1dKT8vO1xyXG4vLyBAaW50ZXJuYWwgQ2hlY2tzIG9mIGEgemlwIGNvZGUgaW4gZm9ybWF0cyAwMDAwMCBvciAwMDAwMC0wMDAwXHJcbmV4cG9ydCBjb25zdCB6aXBDb2RlID0gLyheXFxkezV9JCl8KF5cXGR7NX0tXFxkezR9JCkvO1xyXG5cclxuIl19