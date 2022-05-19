import React from 'react'
import { useState, useEffect } from 'react';
import { csv, max, scaleBand, scaleLinear } from 'd3';
import {Link} from 'react-router-dom'



const csvUrl = 'https://gist.githubusercontent.com/Niks7392/0b9d602b0be9d32b697da64ad0a463a6/raw/7700749a78972c845d553d7c86c98983333a5d23/population.csv';
const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 }


export const BarChart = () => {


  // const navigate = useNavigate()


  // async function populateBarChart() {
  //     const req = await fetch('http://localhost:3001/api/barchart',{
  //         headers: {
  //             'x-access-token': localStorage.getItem('token'),
  //         }
  //     })
  //     const data = req.json()
  //     console.log(data)
  // }
  // useEffect(()=>{
  //     const token = localStorage.getItem('token')
  //     if(token){
  //         const User = Jwt.decode(token)
  //         if (!User){
  //             localStorage.removeItem('token')
  //             navigate('/register')
  //         }else{
  //             populateBarChart()
  //         }
  //     }
  // },[])

  const changeBar = ()=>{

  }

  const [data, setData] = useState(null)
  const row = d => {
    d.Population = parseFloat(d['2020']);
    return d;
  }
  useEffect(() => {
    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10))
    });
  }, [])

  if (!data) {
    return <pre>loading....</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right



  // console.log(data[0])
  const yScale = scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight])

  const xScale = scaleLinear()
    .domain([0, max(data, d => d.Population)])
    .range([0, innerWidth]);


  return (
    <div className='barContainer'>
      <svg width={width} height={height} >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {xScale.ticks().map(tickValue =>
            <g transform={`translate(${xScale(tickValue)}, 0)`}>
              <line x1={0} x2={0} y1={0} y2={innerHeight} stroke='black' />
              <text style={{ textAnchor: 'middle' }} dy='.71em' y={innerHeight + 3}>{tickValue}</text>
            </g>
          )}

          {yScale.domain().map(tickValue =>
            <g transform={`translate(0, ${yScale(tickValue) + yScale.bandwidth() / 2})`}>
              <text x={-3} dy='.32em' style={{ textAnchor: 'end' }}>{tickValue}</text>
            </g>
          )}


          {data.map(d => <rect key={d.Countrycode} x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()} />)}
        </g>
      </svg>

      <div className="conatiner">
        <Link to='/'>Return Home</Link>
        <button onClick={changeBar}>Refresh BarChart</button>
      </div>
    </div>
  )
}

export default BarChart;
