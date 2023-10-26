import './FormContact.css';

export default function FormContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
  };

  return (
    <form className='FormContact' action={'/'} method='post' onSubmit={e => handleSubmit(e)}>
      <label htmlFor='firstname'>Prénom</label>
      <input type='text' name='firstname' id='firstname' />
      <label htmlFor='lastname'>Nom</label>
      <input type='text' name='lastname' id='lastname' />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='message'>Votre message</label>
      <textarea name='message' id='message' />
      <input type='submit' value='Envoyer' />
    </form>
  );
}
