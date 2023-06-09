import { Btn } from 'components/Button/Button.styled';

const Button = ({ onClick }) => (
  <Btn type="button" onClick={onClick}>
    Load more
  </Btn>
);

export default Button;
