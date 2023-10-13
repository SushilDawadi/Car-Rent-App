import { carProps } from "@/types";
import { FilterProps } from "@/types";
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;
  const headers = {
    "X-RapidAPI-Key": "04eefa4d9fmsh870727cc5fd9d70p1369ccjsne0caa66fc80d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}&model=${model}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; //base rental price per day in dollars
  const mileageFactor = 0.1; //Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of car's age

  //calculate additional rate based on mileage and age
  const milageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  //substracting the provided year from current year to get the age of the car.

  //calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + milageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: carProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  //hrjavascript-mastery
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  //creating 'URLSearchParams' object based on the current URL search parameters.
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
