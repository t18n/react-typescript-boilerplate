// This function helps import multiple images from a folder
// Usage : const photos = importAll(require.context('Assets/photos', false, /\.(png|jpe?g|svg)$/));
export function importAllImages (r) {
  return r.keys().map(r);
}

// Return multiple className which separate by space
// Usage : Really useful when adding multiple classes to className as modules
export function classes(classArray) {
  return classArray.join(' ');
}