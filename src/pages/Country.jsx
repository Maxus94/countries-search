import { Container, CountryInfo, GoBackBtn, Section } from 'components';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const [country, setCountry] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { countryId } = useParams();

  useEffect(() => {
    async function detailsCountry() {
      setLoading(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    detailsCountry();
  }, [countryId])

  return (
    <Section>
      <Container>
        <GoBackBtn path={"/"} >
          Go back
        </GoBackBtn>
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
