export async function fetchCountries(search: string = "", region: string = "") {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    let filteredData = data;
    if (region) {
      filteredData = filteredData.filter(
        (country: any) => country.region.toLowerCase() === region.toLowerCase()
      );
    }

    if (search) {
      filteredData = filteredData.filter((country: any) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredData;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCountryByName(name: string) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();

    if (data[0].borders && data[0].borders.length > 0) {
      const borderCountries = data[0].borders.map(async (border: any) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        const country = await response.json();
        return country[0].name.common;
      });

      data[0].borderCountries = await Promise.all(borderCountries);
    } else {
      data[0].borderCountries = [];
    }

    return data[0];
  } catch (error) {
    console.error(error);
  }
}
