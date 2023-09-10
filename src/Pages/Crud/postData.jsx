import { useState, useEffect } from 'react'
import { getData } from './getData'

export function postData(url, el ) {
  const [data, setData] = useState()
  const { userId, content } = el

  async function postApi(url) {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        content: content
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err)
      })
  }
  
  return data
}