import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { Search } from '../../components';
import { Logo } from '../../assets';
import theme from '../../theme';

const Navbar = () => {
  const { colors } = theme;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: colors.darkBlue }}
    >
      <Link>
        <img src={Logo} height={45} alt="logo" />
      </Link>
      <Search />
    </Stack>
  );
};

export default Navbar;
