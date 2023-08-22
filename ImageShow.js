import React from 'react'

const ImageShow = ({ image }) => {
  return (
	<div>
	  <img src={image.urls.small} alt={image.alt_description} />
	</div>
  )
}
sdscsd
export default ImageShow
