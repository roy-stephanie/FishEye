import './FormContact.css';

export default function FormContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
  };

  return (
    <form className='FormContact' action={'/'} method='post' onSubmit={e => handleSubmit(e)}>
      <label htmlFor='firstname'>Prénom</label>
      <input type='text' name='firstname' id='firstname' tabIndex={3} />
      <label htmlFor='lastname'>Nom</label>
      <input type='text' name='lastname' id='lastname' tabIndex={4}/>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' tabIndex={5}/>
      <label htmlFor='message'>Votre message</label>
      <textarea name='message' id='message' tabIndex={6}/>
      <input type='submit' value='Envoyer' tabIndex={7}/>
    </form>
  );
}
