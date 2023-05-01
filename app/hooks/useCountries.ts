import countries from "world-countries";

const formattedCountries = countries.map(
  ({ cca2, name: { common }, flag, latlng, region }) => ({
    value: cca2,
    label: common,
    flag,
    latlng,
    region,
  })
);

const useCountries = () => {
  const getAll = () => formattedCountries;
  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return { getAll, getByValue };
};

export default useCountries;
