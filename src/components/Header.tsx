import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ my: 3, borderBottom: 1, borderTop: 1, borderColor: 'divider' }}>
        <Typography
          component="h1"
          variant="h2"
          color="inherit"
          align="center"
          
          noWrap
          style={{ fontWeight: 700, color: 'green' }}
          sx={{ flex: 1, py: 2 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}