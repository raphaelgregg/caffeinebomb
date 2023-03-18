import {Container, Header, SignInButton, SignInButtonIcon, SignInButtonText, Title} from './styles';

import GoogleSvg from '@assets/svg/googleIcon.svg';
import CoffeeWork from '@assets/svg/coffeeWork.svg';
import CoffeeLogo from '@assets/svg/coffeeLogo.svg';

export function SignIn() {
  return (
    <Container>
      <Header>
        <CoffeeWork width="360px"/>
      </Header>

      <CoffeeLogo width="88px" height="60px"  style={{marginBottom: 45}} />

      <Title>De quem é{'\n'} a vez de fazer o{'\n'} café?</Title>

      <SignInButton>
        <SignInButtonIcon>
          <GoogleSvg width="28px" height="25px" />
        </SignInButtonIcon>
        <SignInButtonText>Entrar com Google</SignInButtonText>
      </SignInButton>
    </Container>
  );
} 