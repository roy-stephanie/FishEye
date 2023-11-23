import React, { useEffect, useState } from 'react';
import './SortImagesPhotographer.css';

export default function SortImagesPhotographer({ sort }) {
  const [choiceSelectSort, setChoiceSelectSort] = useState('Popularité');
  const [choiceOptionSort, setChoiceOptionSort] = useState([]);
  const [openOption, setOpenOption] = useState(false);

  const sortTypes = {
    sort: [
      'Popularité',
      'Date',
      'Titre',
    ],
  };

  const sortChoiceTypes = (choice) => {
    const newChoice = sortTypes.sort.filter(c => c !== choice);
    setChoiceOptionSort(newChoice);
    setChoiceSelectSort(choice);
    sort(choice);
  };

  const handleOpenOption = () => {
    setOpenOption(prevState => !prevState);
  };

  return (
    <div className={'SortImagesPhotographer'}>

      <div className={'SortImagesPhotographerSelect'}>
        <button className={`${openOption ? 'SelectActive ' : 'SelectInActive'}`} onClick={() => {
          handleOpenOption();
          sortChoiceTypes(choiceSelectSort);
        }}>
          {choiceSelectSort}
          <div className={`SortImagesPhotographerSelectSVG ${openOption ? 'rotate180 ' : 'rotate0'}`}>
            <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M14.12 0.453125L8 6.55979L1.88 0.453125L0 2.33312L8 10.3331L16 2.33312L14.12 0.453125Z'
                    fill='#FFF' />
            </svg>
          </div>
        </button>
        <div className={'SortImagesPhotographerOption'}>
          {openOption && choiceOptionSort.map((sortType, index) => {
            return <div>
              <button key={`sort-${index}`} onClick={() => sortChoiceTypes(sortType)}>{sortType}</button>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
