// basic GET request
fetch('https://example.com')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error('Error:', err));

// POST request
fetch('https://example.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key: 'value' }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error('Error:', err));

// async/await
async function fecthData() {
  try {
    const res = await fetch('https://example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}
