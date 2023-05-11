import Chart from '../Chart/chart.js'

const ExpenseChart=({chartData})=>{
    console.log(chartData)
let chartDataPoints=[
    {label:'Jan', value:0},
    {label:'Feb', value:0},
    {label:'Mar', value:0},
    {label:'Apr', value:0},
    {label:'May', value:0},
    {label:'Jun', value:0},
    {label:'Jul', value:0},
    {label:'Aug', value:0},
    {label:'Spe', value:0},
    {label:'Oct', value:0},
    {label:'Nov', value:0},
    {label:'Dec', value:0} 
]

chartData.forEach(element => {
    chartDataPoints[element.date.getMonth()].value +=element.amount;
});
return (
    <Chart dataPonits={chartDataPoints}></Chart>
)

}

export default ExpenseChart