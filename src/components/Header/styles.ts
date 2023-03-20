import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.COLORS.GRADIENTE,
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0.3 },
}))`
  height: 152px;

  padding: 65px;
  padding-left: 24px;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const UserName = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMIBOLD};
`;

export const SubTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XS + 1};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border: 1px solid ${({theme}) => theme.COLORS.SECONDARY};
`;