import { useState, useEffect } from 'react'

export function getData(url) {
  const [data, setData] = useState([])
  
    async function getApi(url) {
        await fetch(url)
        .then((response) => {
            if (!response.ok || response.status !== 200 || response.json.name !== 'json') {
              throw new Error('Invalid!')
            }
            return response.json()
        })
        .then((data) => {
          setData(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
    }
    useEffect(() => {
        getApi(url)
    }, [])

  return data
}