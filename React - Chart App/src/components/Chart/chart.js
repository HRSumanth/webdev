import './chart.css'
import ChartBar from './chartBar'

const Chart=({dataPonits})=>{
    const dataPonitValues= dataPonits.map((point)=>point.value)

    const maxPointValue = Math.max(...dataPonitValues)

    return (
        <div className='chart'>
           {dataPonits.map((dataPoint)=>
            <ChartBar
              key={dataPoint.label}
              label={dataPoint.label}
              value={dataPoint.value}
              maxValue={maxPointValue}
            ></ChartBar>
           )}
        </div>
    )

}

export default Chart