import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { Search } from '../..';
import { Logo } from '../../../assets';
import theme from '../../../theme';

const Navbar = () => {
  const { colors } = theme;

  return (
    <Stack
      direction="row"
      p={2}
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: colors.darkBlue, position: 'sticky' }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={Logo} height={45} alt="logo" />
      </Link>
      <Search />
    </Stack>
  );
};

export default Navbar;
