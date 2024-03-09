import { Header, Heading } from 'components';
import { Country } from 'pages/Country';
import { Home } from 'pages/Home';
import { SearchCountry } from 'pages/SearchCountry';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="country" element={<SearchCountry />} />
        <Route path="country/:countryId" element={<Country />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
