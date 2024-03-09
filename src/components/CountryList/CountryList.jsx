import { Link } from 'react-router-dom';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ country, flag, id }) => (
        <GridItem key={id}>
          <Link>
            <img src={flag} alt={country} />
            <p>{country}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
