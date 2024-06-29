export async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v2/all");
  const data = await response.json();
  return data;
}

export async function getCountryByName(name: string) {
  const response = await fetch(`https://restcountries.com/v2/name/${name}`);
  const data = await response.json();
  return data[0];
}
