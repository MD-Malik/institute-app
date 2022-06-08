import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { api } from '../apiLink'

export const Capacity = () => {
  const [data, setData] = React.useState([
    {property : 'First Term (0)', value : 0 },
    {property : 'Second Term (0)', value : 0 }
  ])

  const [noOfStudents, setNoOfStudents] = useState({
    termOne : 0,
    termTwo : 0
  })

  const getData = async() => {
    let result1 = await fetch(`${api}/Students?term=1`)
    result1 = await result1.json();
    setNoOfStudents({
      ...noOfStudents,
      termOne : result1.length
    })
    
    let result2 = await fetch(`${api}/Students?term=2`)
    result2 = await result2.json();
    setNoOfStudents({
      ...noOfStudents,
      termTwo : result2.length
    })
  }

  useEffect(()=>{
    getData();
    setData([
      {property : `First Term (${noOfStudents.termOne})`, value : noOfStudents.termOne },
    {property : `Second Term (${noOfStudents.termTwo})`, value : noOfStudents.termTwo }
    ])
  },[noOfStudents])

  useEffect(()=>{
    const w = 350;
    const h = 350;
    const radius = w/2;
    const svg = d3.select(svgRef.current)
    .attr('width', w)
    .attr('height', h)
    .style('overflow', 'visible')
    .style('margin-top', '230px')
    .style('margin-left', '300px');

    const formattedData = d3.pie().value(d=>d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);

  svg.selectAll()
  .data(formattedData)
  .join('path')
  .attr('d', arcGenerator)
  .attr('fill', d => color(d.value))
  .style('opacity', 0.7);

  svg.selectAll()
  .data(formattedData)
  .join('text')
  .text(d=>d.data.property)
  .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
  .style('text-anchor', 'middle');
  },[data])

  const svgRef = useRef()
  return (
    <div>
        <div>
            <h1>Capacity</h1>
        </div>
        <div>
            <svg ref={svgRef}></svg>
        </div>
    </div>
  )
}
