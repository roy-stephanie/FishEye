import './HeaderPhotographer.css';
import FormButton from '../form_button/FormButton';

export default function HeaderPhotographer({ photographer }) {
  const host = window.location.host;

  return (
    <div className='HeaderPhotographer'>
      <div>
        <div className='HeaderPhotographer_Name'>{photographer.name}</div>
        <div className='HeaderPhotographer_Location'>
          <div>{photographer.city}, {photographer.country}</div>
        </div>
        <div className='HeaderPhotographer_TagLine'>{photographer.tagline}</div>
      </div>
      <div>
        <FormButton photographer={photographer}/>
      </div>
      <div className='HeaderPhotographer_Portrait'>
        <img src={`http://${host}/images/photographers/Photographers-ID-Photos/${photographer.portrait}`} alt={`${photographer.name}`} />
      </div>
    </div>
  );
}
