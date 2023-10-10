export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "04eefa4d9fmsh870727cc5fd9d70p1369ccjsne0caa66fc80d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
