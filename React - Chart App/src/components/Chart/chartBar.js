import './chartBar.css'

const ChartBar=({label,value,maxValue})=>{
    let barHeightFill='0%';

    if (maxValue>0){
          barHeightFill=Math.round((value/maxValue)*100)+'%'
    }

    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height:barHeightFill, backgroundColor:'blue'}}></div>
            </div>
            <div className='chart-bar__label'>{label}</div>
        </div>
    )

}

export default ChartBar