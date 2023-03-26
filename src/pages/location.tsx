import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import Link from "next/link"
import React, { Component } from "react"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBemLpiMnL2psI3xvX59bK721Nl5XKEbxY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(15)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
  ) : <></>
}

const LocationPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Location" description="Felix Vita store location" />
      <div className="flex flex-col items-center justify-center mb-32">
        <h1 className="text-2xl-semi text-gry-900 mb-2">Location</h1>
        <p className="mb-5">
          Come and visit us!
        </p>
        <Location/>
      </div>
    </>
  )
}

LocationPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default LocationPage
