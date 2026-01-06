import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=24`
      )
      setGallery(response.data)
    }
    getData();
    document.title = `Gallery page: ${page}`;
  }, [page])

  return (
    <>
      <h2>You are on page No : {page}</h2>

      <div className="gallery-container">
        {gallery.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.download_url} alt={photo.author} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="btns">
        <Button btnText="Prev" onClick={() => setPage(p => Math.max(1, p - 1))} />
        <Button btnText="Next" onClick={() => setPage(p => p + 1)} />
      </div>
    </>
  )
}

export default Gallery
