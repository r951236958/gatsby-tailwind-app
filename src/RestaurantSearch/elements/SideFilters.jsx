import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faChevronUp,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons"

import FormGroup from "../components/FormGroup"
import RadioGroup from "../components/RadioGroup"
import CheckboxGroup from "../components/CheckboxGroup"

const dietaryRestrictions = [
  { label: "Organic", name: "organic" },
  {
    label: "Gluten Free",
    name: "gluten-free",
  },
  {
    label: "Kosher",
    name: "kosher",
  },
  {
    label: "Paleo",
    name: "paleo",
  },
  {
    label: "Vegan",
    name: "vegan",
  },
  {
    label: "Halal",
    name: "halal",
  },
]

function SideFilters() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(true)
  const [dietaryOpen, setDietaryOpen] = useState(true)
  const DietChecks = dietaryRestrictions.map(d => (
    <FormGroup key={d.name}>
      <CheckboxGroup label={d.label} name={d.name} />
    </FormGroup>
  ))
  return (
    <div className="relative w-full lg:w-56">
      <div
        className="flex items-center justify-center w-full py-3 font-bold bg-white cursor-pointer lg:hidden"
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        Change Filters{" "}
        <FontAwesomeIcon icon={faSlidersH} className="ml-2 text-xl" />
      </div>
      <div
        className={`${
          filtersOpen ? "flex" : "hidden"
        } absolute left-0 px-6 lg:px-auto bg-white w-full lg:w-auto z-50 mt-10 lg:mt-0 lg:sticky top-0 pt-6 pb-24 lg:flex flex-col lg:max-h-screen`}
      >
        <div className="border-b border-gray-300">
          <a className="text-sm font-bold text-blue-400 underline">
            Change Address
          </a>
          <FormGroup>
            <RadioGroup
              name="service"
              radios={[
                {
                  value: "delivery",
                  label: "Delivery",
                  checked: true,
                },
                {
                  value: "curbside",
                  label: "Curbside",
                },
                {
                  value: "orderin",
                  label: "Order In",
                },
              ]}
            />
          </FormGroup>
        </div>
        <div className="flex-1 lg:overflow-y-scroll">
          <div className="py-6 border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setSortOpen(!sortOpen)}
            >
              <h5 className="text-sm font-bold">Sort</h5>
              <FontAwesomeIcon
                icon={sortOpen ? faChevronUp : faChevronDown}
                className="text-base text-blue-400"
              />
            </div>
            {sortOpen && (
              <FormGroup>
                <RadioGroup
                  name="sort"
                  radios={[
                    {
                      value: "distance",
                      label: "Distance",
                    },
                    {
                      value: "popular",
                      label: "Popularity",
                    },
                    {
                      value: "topRated",
                      label: "Top Rated",
                      checked: true,
                    },
                    {
                      value: "atoz",
                      label: "A to Z",
                    },
                  ]}
                />
              </FormGroup>
            )}
          </div>
          <div className="py-6 border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setDietaryOpen(!dietaryOpen)}
            >
              <h5 className="text-sm font-bold">Dietary</h5>
              <FontAwesomeIcon
                icon={dietaryOpen ? faChevronUp : faChevronDown}
                className="text-base text-blue-400"
              />
            </div>
            {dietaryOpen && DietChecks}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideFilters