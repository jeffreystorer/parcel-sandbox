import { useState } from 'react'
import { get, set } from '/packages/localStorage';
import capitalize from '/packages/capitalize';

export default function App() {
  const [h1Style, setH1Style] = useState({
    color: 'green',
    fontFamily: 'cursive',
  })
  set('date', new Date());
  const setDate = get('date');
  const displayDate = formatDate(setDate)
  const lowerName = 'jeff';
  const capName = capitalize(lowerName);

  const centerStyle = {
    textAlign = "center"
  }

  const h2Style = {
    color: 'red',
  };

  const pStyle = {
    color: 'purple',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  function setColor(e) {
    const colorChoice = e.target.id;
    setH1Style({color: colorChoice, fontFamily: 'cursive'})
  }

  function formatDate (dateString){
  const options = { year: "numeric", month: "long", day: "numeric", hour:"numeric", minute: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
  return (
    <>
      <div style={centerStyle}>
        <h1 style={h1Style}>
          {capName} is Testing Parcel on {displayDate}
        </h1>
        <h2 style={h2Style}>Header 2</h2>
        <p style={pStyle}>Some Text Here</p>
        <p style={pStyle}>More Text Here</p>
        <button style={{ backgroundColor: "green", color: "white" }} id='green' onClick={setColor}>Green</button>
        <br/><br />
        <button style={{ backgroundColor: "red", color: "white" }} id='red' onClick={setColor}>Red</button>

      </div>
    </>
  );
}
