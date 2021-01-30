import React, { useEffect } from 'react'
import { useGlobalContext } from '../../Context'

export default function List() {
  const { setNavFixed, setSearchOn } = useGlobalContext();
  useEffect(() => {
    setNavFixed(true);
    setSearchOn(false);
  }, [])

  return (
    <div>
      
    </div>
  )
}
