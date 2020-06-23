/**
 * @type public
 * @name getPageType
 * @description
 *
 * Checks body class for page type
 *
 * @return {String} page type
 *
 **/
export function getPageType() {
  const prefix = 'fire-page-type--';
  const bodyClasses = Array.from(document.body.classList);
  const [type] = bodyClasses.filter((item) => item.includes(prefix));
  const cleanType = type.replace(prefix, '');
  return cleanType;
}
