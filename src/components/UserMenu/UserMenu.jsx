import { useDispatch, useSelector } from 'react-redux';
import {
  ContainerUserMenu,
  ButtonLogOut,
  WelcomeUserText,
} from './UserMenu.styled';
import { selectUser } from 'redux/user/selectors';
import { logout } from 'redux/user/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <ContainerUserMenu>
      <WelcomeUserText>
        Hello, <span>{user.name}</span>
      </WelcomeUserText>
      <ButtonLogOut type="button" onClick={() => dispatch(logout())}>
        Logout
      </ButtonLogOut>
    </ContainerUserMenu>
  );
};
