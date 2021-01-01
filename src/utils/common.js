// This function helps import multiple images from a folder
// Usage : const photos = importAll(require.context('src/assets/photos', false, /\.(png|jpe?g|svg)$/));
export function importAllImages(r) {
  return r.keys().map(r);
}

// Return multiple className which separate by space
// Usage : Really useful when adding multiple classes to className as modules
export function classes(classArray) {
  return classArray.join(' ');
}

// It is a good practice to not use index as a key when generating a list of JSx elements
// This function generate an unique hash with String input
// Written for generating React key element quickly
export function generateKey() {
  const key = `${Math.random().toString(36).substr(2, 6)}`;
  return key;
}
