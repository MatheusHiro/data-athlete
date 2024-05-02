import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <Button
        border='1rem' color='#fc4c02' height='1rem' onClick={() => console.log('botão clicado')} radius='1rem' width='2rem' />
    </>
  );
}

export default App;
