import removeMd from 'remove-markdown';

export const toKebab = (string) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export const getMarkdownExcerpt = (markdown, maxExcerptLength = 120) => {
  let contentText = removeMd(markdown);

  contentText = contentText.trim().replace(/\s+/g, ' ');
  const excerpt = contentText.slice(0, maxExcerptLength);

  if (contentText.length > maxExcerptLength) {
    return `${excerpt}...`;
  }

  return excerpt;
};

export const getHtmlExcerpt = (content, maxExcerptLength = 120) => {
  const strippedContent = content.replace(/<\/?[^>]+(>|$)/g, '');
  const excerpt = strippedContent.slice(0, maxExcerptLength);

  if (strippedContent.length > maxExcerptLength) {
    return `${excerpt}...`;
  }

  return excerpt;
};
