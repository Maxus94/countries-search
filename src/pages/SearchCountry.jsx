import { Container, SearchForm, CountryList, Section } from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/countryApi';
import { Loader } from 'components';

export const SearchCountry = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function getCountries() {
      setLoading(true);
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, [query]);

  function handleQuery(value) {
    setQuery(value);
  }

  console.log(query);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleQuery} />
        {error && <h2>Error! {error}</h2>}
        {loading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
