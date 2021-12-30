import propTypes from 'prop-types';
import { Grid } from './Gallery.styled';
export const Gallery = ({ children }) => {
  return <Grid>{children}</Grid>;
};

Gallery.propTypes = {
  children: propTypes.node,
};
