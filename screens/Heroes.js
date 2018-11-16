import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {Container, Content, Text, List, Header, Left, Body, Right, Icon} from 'native-base';
import axios from 'axios';
import Hero from '../components/hero';

export default class Heroes extends Component {

  constructor(){
    super();
    this.state = {
      heroes: []
    }
  }

  componentDidMount(){
    const self = this
    axios.get('http://rest.learncode.academy/api/aziz/heroes').then((response)=>{
      self.setState({heroes: response.data});
    }).catch((error)=>{
      console.log('something went wrong')
      console.log(error)
    })
  }

  renderHeader(){
    return(
      <Header>
        <Left/>
        <Body>
          <Text>Heroes</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={()=>this.props.navigator.push({screen:'push.HeroAdd'})}>
            <Icon name="add" style={{color: '#62afef'}}/>
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }

  render(){
    return(
      <Container>
        <Content>
          {this.renderHeader()}
          <List>
            {this.state.heroes.map((hero, key)=> <Hero key={key} hero={hero} {...this.props}/>)}
          </List>
        </Content>
      </Container>
    )
  }
}