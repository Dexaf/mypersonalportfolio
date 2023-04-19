import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function PhotoCarousel(props) {
    const photos = props.photos;
    const hasAutoPlay = props.hasAutoPlay ? props.hasAutoPlay : false;
    const hasLoop = props.hasLoop ? props.hasLoop : false;
    const hasThumbs = props.hasThumbs ? props.hasThumbs : false;

    return <>
        {photos.length === 0 && <LoadingSpinner classes="is4rat3"/>}
        {photos.length > 0 && <Carousel autoPlay={hasAutoPlay} infiniteLoop={hasLoop} showThumbs={hasThumbs}>
            {photos.map((photo, index) => {
                return <div key={index}>
                    <img src={photo.imgUrl} alt={"pic_" + index} className="is4rat3 photos-bg" />
                    {photo.descr && <p className="legend">{photo.descr}</p>}
                </div>
            })}
        </Carousel>}
    </>
}

export default PhotoCarousel