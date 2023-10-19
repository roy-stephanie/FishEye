export default async function getPhotographers() {
  const host = window.location.host;

  try {
    const response = await fetch(`http://${host}/data/photographers.json`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
