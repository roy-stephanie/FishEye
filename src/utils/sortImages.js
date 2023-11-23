export default function SortImages(images, sort) {
  let sortedImages = [];

  if (sort === 'Popularité') {
    sortedImages = [...images].sort((a, b) => b.likes - a.likes);
  }

  if (sort === 'Date') {
    sortedImages = [...images].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sort === 'Titre') {
    sortedImages = [...images].sort((a, b) => {
      const titleA = a.title.toUpperCase(); // ignore upper and lowercase
      const titleB = b.title.toUpperCase(); // ignore upper and lowercase

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  return sortedImages;
}
