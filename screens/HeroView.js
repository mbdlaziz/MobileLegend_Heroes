import React, {Component} from 'react';
import {Container, Content, Text, Header, Left, Body, Right, Icon, List, ListItem, Thumbnail} from 'native-base';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class HeroView extends Component {

  static navigatorStyle={
    navBarHidden: true,
    tabBarHidden: true
  }

  renderHeader(){
    return(
      <Header>
        <Left>
          <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
            <Icon name='arrow-back' style={{color: '#62afef'}}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Text>Hero Detail</Text>
        </Body>
        <Right/>
      </Header>
    )
  }

  render(){

    const {hero} = this.props;

    return(
      <Container>
        {this.renderHeader()}
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={88} source={{uri:hero.imageUri}}/>
              <Body>
                <Text>{hero.name}</Text>
                <Text note>{hero.title}</Text>
              </Body>
            </ListItem>

            <ListItem itemDivider>
              <Text>Role</Text>
            </ListItem>
            <ListItem>
              <Text>{hero.role}</Text>
            </ListItem>

            <ListItem itemDivider>
              <Text>Speciality</Text>
            </ListItem>
            <ListItem>
              <Text>{hero.speciality}</Text>
            </ListItem>
            
            <ListItem itemDivider>
              <Text>Skills</Text>
            </ListItem>
            <ListItem>
              <Text>...</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

HeroView.propTypes = {
  hero: PropTypes.object.isRequired
};

export default HeroView;