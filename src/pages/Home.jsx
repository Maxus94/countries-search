import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getCountries() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, []);

  return (
    <Section>
      <Container>
        {error && <h2>Error! {error}</h2>}
        {loading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
