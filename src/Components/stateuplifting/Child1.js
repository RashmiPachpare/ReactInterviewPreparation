import React from 'react'

const Child1 = (abc) => {
    console.log(abc)
    const dataInChild="this is from child component"
    abc.getter(dataInChild)

  return (
    <div>Child1:{abc.data}</div>
  )
}

export default Child1