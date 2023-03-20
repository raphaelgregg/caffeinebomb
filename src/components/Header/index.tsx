
import { View } from "react-native";
import {Avatar, Container, Content, SubTitle, Title, UserName} from "./styles";

export function Header() {
  return(
    <Container>
      <Content>
        <View>
          <Title>
            Olá, <UserName> Gregg</UserName>
          </Title>
          <SubTitle>Bateu uma preguiça, que acha de um café?</SubTitle>
        </View>

        <Avatar>
          
        </Avatar>
      </Content>
    </Container>
  );
}