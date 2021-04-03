import React from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Badge } from 'native-base';

const NbaseScreen = () => {
  return(
      <Container>
         <Header>
           <Left>
             <Button transparent>
              <Icon name='menu' />
             </Button>
           </Left>
           <Body>
             <Title>Expense Tracker</Title>
           </Body>
           <Right />
         </Header>

         <Content>
            <Card >
              <CardItem header bordered>
                <Text> Native Base </Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  My First attempt to create a react native base app for testing purpose and to gain the knowledge.
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Text>By Rajeev</Text>
              </CardItem>
            </Card>
         </Content>

         <Footer>
          <FooterTab>
            <Button vertical>
              <Badge><Text>5</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>            
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
         </Footer>
      </Container>
  );
}

export default NbaseScreen;
