import { IconButton, Paper } from '@mui/material';

import theme from '../../../theme';
import { Search as SearchIcon } from '@mui/icons-material';

const Search = () => {
  const { border, colors } = theme;

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: border.radius,
        border: `${border.width} solid ${colors.stroke}`,
        pl: 2,
        mr: { sm: 5 },
        boxShadow: 'none',
      }}
    >
      <input type="text" className="search-bar" placeholder="Search" />
      <IconButton type="submit" sx={{ p: 1, color: colors.darkPink }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
