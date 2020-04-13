/**
 *
 * @param {String} url
 */
export default function getDomainName(url) {
  return url
    ? url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split(/[/?#]/)[0]
    : url;
}
