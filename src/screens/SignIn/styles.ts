import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({theme})=> ({
  colors: theme.COLORS.GRADIENTE,
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0.3 },
}))`
  width: 100%;
  height: 364px;

  align-items: center;
  justify-content: flex-end;

  background-color: ${({theme}) => theme.COLORS.GRADIENTE};

  margin-bottom: 61px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.COLORS.HEADING};
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMIBOLD};
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 40px;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 295px;
  height: 56px;

  background-color: ${({theme})=> theme.COLORS.BOXES};
  color: ${({theme}) => theme.COLORS.GRAY_500};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;

  border-radius: 5px;
  border: 1px ${({theme})=> theme.COLORS.STROKE};

  flex-direction: row;
  align-items: center;
`;

export const SignInButtonIcon = styled.View`
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 100%;
  border-right: 1px ${({theme})=> theme.COLORS.PRIMARY};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: 36px;
`;

export const SignInButtonText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_500};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-weight: 600;
  line-height: 40px;
`;