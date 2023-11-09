import './SortImagesPhotographer.css';

export default function SortImagesPhotographer({ sort }) {
  const handleSort = (e) => {
    sort(e.target.value);
  };

  return (
    <form action='/'>
      <label htmlFor='popularity' className='SortImagesPhotographerLabel'>Trier par</label>
      <select name='popularity' id='popularity' className='SortImagesPhotographerDropdown'
              onChange={e => handleSort(e)}>
        <option value='popularity'>Popularité</option>
        <option value='date'>Date</option>
        <option value='title'>Titre</option>
      </select>
    </form>
  );
}
