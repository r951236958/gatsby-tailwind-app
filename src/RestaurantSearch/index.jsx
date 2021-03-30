import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import NavSearchMenu from './elements/NavSearchMenu'
import SideFilters from './elements/SideFilters'

import Alert from './components/Alert'
import SimpleCard from './components/SimpleCard'
import { restaurants } from './sub/restaurants'

function RestaurantSearch() {
  const AllRestaurants = restaurants.map((r,i) => {
    const { image, name, rating, cuisine, distance, price } = r
    return (
      <a href="#" key={i}>
        <SimpleCard
          key={name}
          image={image}
          className="h-full mx-auto transition-all duration-200 transform shadow-sm cursor-pointer hover:border-gray-400 ease hover:-translate-y-1"
          html={
            <div className="text-sm">
              <h3 className="text-base font-bold">{name}</h3>
              <div className="flex items-center text-green-400">
                <FontAwesomeIcon icon={faStar} className="mr-2" /> {rating}
              </div>
              <p className="mt-1">
                {cuisine.map((c, index) => (
                  <span key={`${c}${name}`}>
                    {c} {index === cuisine.length - 1 ? '' : `\u00B7 `}
                  </span>
                ))}
              </p>
              <p>
                {distance} miles away &middot; {price}
              </p>
            </div>
          }
        />
      </a>
    )
  })
  return (
    <div>
      <NavSearchMenu />
      <div className="flex flex-col w-full lg:flex-row lg:px-6">
        <SideFilters />
        <div className="flex-1 px-6 py-6 lg:pl-12 lg:px-0">
          <Alert content="We are now offering contactless delivery in light of COVID-19." />
          <div className="mt-12">
            <h1 className="text-3xl font-bold">Recommended For You</h1>
            <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-3 xl:grid-cols-4">
              {AllRestaurants}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantSearch
