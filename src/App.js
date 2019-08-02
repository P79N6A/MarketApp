/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Provider, TabBar, Icon } from '@ant-design/react-native'
import SaleAnalysis from './pages/saleAnalysis'

type Props = {}
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'analysis'
    }
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName
    })
  }

  render() {
    return (
      <Provider>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#f5f5f5"
        >
          <TabBar.Item
            icon={<Icon name="bar-chart" />}
            title="销售分析"
            selected={this.state.selectedTab === 'analysis'}
            onPress={() => this.onChangeTab('analysis')}
          >
            <SaleAnalysis/>
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="account-book" />}
            title="销售管理"
            selected={this.state.selectedTab === 'manager'}
            onPress={() => this.onChangeTab('manager')}
          ></TabBar.Item>
        </TabBar>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
