import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UserStats from "./UserStats"
import styles from "./UserStatsGraphs.module.css"
import { VictoryPie, VictoryChart, VictoryBar } from "victory"

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const graphData = data.map((item) => {
      return { x: item.title, y: Number(item.acessos) }
    })

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    )
    console.log(data)
    setGraph(graphData)
  }, [data])

  return (
    <section className={`${styles.graph} animateLeft`}>
      <div className={`${styles.total} ${styles.graphitem} `}>
        <p>Accesses: {total}</p>
      </div>
      <div className={styles.graphitem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, height: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphitem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs
