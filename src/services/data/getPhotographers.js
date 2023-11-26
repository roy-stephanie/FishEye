export default async function getPhotographers() {
  try {
    const response = await fetch(`/public/data/photographers.json`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
