function cosineSimilarity(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  const counter1 = {};
  const counter2 = {};
  
  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  
  const allChars = new Set([...Object.keys(counter1), ...Object.keys(counter2)]);
  
  const vec1 = [];
  const vec2 = [];
  
  allChars.forEach(char => {
    vec1.push(counter1[char] || 0);
    vec2.push(counter2[char] || 0);
  });
  
  const dotProduct = vec1.reduce((sum, val, i) => sum + val * vec2[i], 0);
  const magnitude1 = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
  const magnitude2 = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));
  
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0.0;
  } else {
    return dotProduct / (magnitude1 * magnitude2);
  }
}

function areStringsSimilar(str1, str2, threshold = 0.8) {
  const similarity = cosineSimilarity(str1, str2);
  return similarity >= threshold;
}
