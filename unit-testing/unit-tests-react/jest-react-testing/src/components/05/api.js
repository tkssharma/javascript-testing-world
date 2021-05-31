export async function getData(title) {
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({title})
  }
  const response = await fetch('https://reqres.in/api/products', options);
  return response;
}