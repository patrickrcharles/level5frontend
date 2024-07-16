import { Button, ButtonProps } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ButtonLink({ ...props }: ButtonProps & { to: string }) {
  return <Button component={Link} {...props} />;
}
