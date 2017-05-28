export default function countWords(s) {
  if (!s.trim()) return 0;

  const regex = /\s+/gi;
  return s.trim().replace(regex, ' ').split(' ').length;
}
