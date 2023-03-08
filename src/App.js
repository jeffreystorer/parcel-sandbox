import { get, set } from '/packages/localStorage';
import capitalize from '/packages/capitalize';

export default function App() {
  set('date', new Date());
  const setDate = get('date');
  const lowerName = 'jeff';
  const capName = capitalize(lowerName);

  const centerStyle = {
    textAlign = "center"
  }

  const h1Style = {
    color: 'green',
    fontFamily: 'cursive',
  };

  const h2Style = {
    color: 'red',
  };

  const pStyle = {
    color: 'purple',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 'bold',
    fontSize: '1rem',
  };
  return (
    <>
      <div style={centerStyle}>
        <h1 style={h1Style}>
          {capName} is Testing Parcel on {setDate}
        </h1>
        <h2 style={h2Style}>Header 2</h2>
        <p style={pStyle}>Some Text Here</p>
        <p style={pStyle}>More Text Here</p>
      </div>
    </>
  );
}
