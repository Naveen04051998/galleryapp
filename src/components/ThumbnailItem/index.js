// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  // eslint-disable-next-line
  const {imageDetails, setActiveThumbnailId, isActive} = props
  // eslint-disable-next-line
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbNail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbNail}
      >
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
