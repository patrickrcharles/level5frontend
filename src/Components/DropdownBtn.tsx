import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Popper, Grow, Paper, MenuList, useTheme } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function DropdownBtn({ ...props }: ButtonProps & { menu: DropMenuType }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div onMouseLeave={handleClose}>
      <Button
        ref={anchorRef}
        id={`dropdown-btn-${props.menu.id}`}
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpen}
        onFocus={handleOpen}
        onClick={handleOpen}
        {...props}
      >
        {props.menu.id}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" transition sx={{ zIndex: 99999 }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
            }}
            easing={{ enter: '0', exit: '0' }} // disable animation
          >
            <Paper sx={{ border: `solid 1px ${theme.palette.augmentColor}` }}>
              <MenuList
                autoFocusItem={open}
                aria-labelledby="composition-button"
                onKeyDown={(event) => handleListKeyDown(event)}
              >
                {props.menu.children.map((item) => (
                  <MenuItem key={uuidv4()} onClick={handleClose} component={Link} to={item.to}>
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
