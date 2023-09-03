/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './Map.css'

const LocationPin = ({text}) => (
    <div className='pin'>
        <Icon icon={locationIcon} className='pin-icon' />
        <p className='pin-text'>{text}</p>
    </div>
)

const Map = ({location, zoomLevel}) => {
    return (
        <div className='map px-20'>
                <p>We're located at , 17 Henin Ibn Ishaq, Al-Hay As-Sabea, Nasr City, Cairo</p>
                <p>For pickup or for a quick and easy delivery, Call us at +20 155 497 4856 </p>
                <h2 className='map-h2'>visit our biskuit store</h2>
                <div className='google-map'>
                    <GoogleMapReact
                        bootstrapURLKeys={{key:''}}
                        defaultCenter={location}
                        defaultZoom={zoomLevel}
                        >
                        <LocationPin 
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                            />
                    </GoogleMapReact>
                </div>
        </div>
    )
}

export default Map