import React from 'react';
import * as MUICore from '@material-ui/core';
import * as MUIIcons from '@material-ui/icons';

const ThingsAppBar = () => {
  return (
    <MUICore.AppBar position="static">
      <MUICore.Toolbar>
        <MUICore.IconButton edge="start" color="inherit" aria-label="menu">
          <MUIIcons.Menu />
        </MUICore.IconButton>
        <MUICore.Typography variant="h6">edgeThings</MUICore.Typography>
        <MUICore.Button color="inherit">Login</MUICore.Button>
      </MUICore.Toolbar>
    </MUICore.AppBar>
  );
};

export default ThingsAppBar;
