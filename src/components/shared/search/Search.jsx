import { IconButton, Paper } from '@mui/material';

import { Search as SearchIcon } from '@mui/icons-material';

import theme from '../../../theme';

const Search = () => {
  const { border, colors } = theme;

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: border.radius,
        border: `${border.width} solid ${colors.stroke}`,
        pl: 2,
        mr: { sm: 5 },
        boxShadow: 'none',
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        style={{ fontSize: '16px' }}
      />
      <IconButton type="submit" sx={{ p: 1, color: colors.darkPink }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
