import { get, set } from '/packages/localStorage';
import capitalize from '/packages/capitalize';
import './styles/index.css';

export default function App() {
  set('date', new Date());
  const setDate = get('date');
  const lowerName = 'jeff';
  const capName = capitalize(lowerName);
  return (
    <>
      <div className='center'>
        <h1>
          {capName} is Testing Parcel on {setDate}
        </h1>
        <h2>Header 2</h2>
        <p>Some Text Here</p>
        <p>More Text Here</p>
      </div>
    </>
  );
}
