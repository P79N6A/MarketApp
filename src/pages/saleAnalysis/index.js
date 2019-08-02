import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native'
import request from '../../utils/request.js'
const { width, height } = Dimensions.get('window')

type Props = {}

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]
export default class SaleAnalysis extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getBarData()
  }

  async getBarData() {
    const res = await request.get('/getSaleAnalysisBar')
    if (res.error === 0) {
      this.setState({
        data: res.data
      })
    }
  }

  render() {
    return this.state.data.length ? (
      <View style={styles.container}>
        <VictoryChart
          // theme={VictoryTheme.material}
          height={height - 300}
          domainPadding={{ x: 35 }}
          padding={{ left: 80, right: 80 }}
        >
          <VictoryBar
            data={this.state.data}
            x="x"
            y="y"
            labels={d => `${d.y}`}
            horizontal
            animate={{
              onLoad: { duration: 500 }
            }}
            cornerRadius={{ top: 5 }}
            style={{
              data: {
                fill: d => (d.y > 150000 ? '#00BFFF' : '#40E0D0'),
                fillOpacity: 0.7,
                width: 10
              },
              labels: {
                fontSize: 15,
                fill: d => (d.y > 150000 ? '#00BFFF' : '#40E0D0')
              }
            }}
          />
        </VictoryChart>
      </View>
    ) : null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
