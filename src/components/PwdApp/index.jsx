import React, { useState, useEffect, useRef } from 'react'
import zxcvbn from 'zxcvbn'
// import Slider from './Slider'
import SliderBar from 'components/SliderBar'
import Tooltip from 'components/Tooltip'
import {
  copyToClipBoard,
  generatePassword,
  setPasswordLength,
} from "../../utils/Helper"

const Test = () => {
  return {
    showPasswordField: true,
    passwordScore: 0,
    password: '',
    chars: {
      lower: 'abcdefghijklmnopqrstuvwxyz',
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numeric: '0123456789',
      symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
    },
    charsLength: 12,
    checkStrength: function () {
      if (!this.password) return (this.passwordScore = 0)
      this.passwordScore = zxcvbn(this.password).score + 1
    },
    generatePassword: function () {
      console.log(document.getElementById('charsSymbols').checked)
      this.password = this.shuffleArray(
        (
          (document.getElementById('charsLower').checked
            ? this.chars.lower
            : '') +
          (document.getElementById('charsUpper').checked
            ? this.chars.upper
            : '') +
          (document.getElementById('charsNumeric').checked
            ? this.chars.numeric
            : '') +
          (document.getElementById('charsSymbols').checked
            ? this.chars.symbols
            : '')
        ).split('')
      )
        .join('')
        .substring(0, this.charsLength)
      this.checkStrength()
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
  }
}

const alpineApp = `<div
  class="w-full mx-auto rounded-lg bg-white dark:bg-transparent dark:border dark:border-gray-400 shadow p-5 text-gray-800"
  style="max-width: 500px"
  x-data="app()"
  x-init="generatePassword()"
>
  <div class="relative mb-2">
    <input
      :type="showPasswordField?'password':'text'"
      id="password"
      x-model="password"
      class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 dark:bg-transparent dark:text-white rounded-md focus:outline-none focus:border-cyan-400 transition-colors"
      placeholder="Password"
      @input="checkStrength()"
    />
    <button
      class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-cyan-400 transition-colors"
      @click.prevent="showPasswordField=!showPasswordField"
    >
      <i
        id="eye-icon"
        class="mdi"
        :class="(showPasswordField?'mdi-eye-outline':'mdi-eye-off-outline')"
      ></i>
    </button>
  </div>
  <div class="flex -mx-1">
    <template x-for="(v,i) in 5">
      <div class="w-1/5 px-1">
        <div
          class="h-2 rounded-xl transition-colors"
          :class="i<passwordScore?(passwordScore<=2?'bg-red-400':(passwordScore<=4?'bg-yellow-400':'bg-green-500')):'bg-gray-200'"
        ></div>
      </div>
    </template>
  </div>
  <hr class="my-5 border border-gray-200" />
  <div class="mb-2">
    <label class="block text-xs font-semibold text-gray-500 mb-2"
      >PASSWORD LENGTH</label
    >

    <div
      class="input-number-group input-number-group flex flex-row items-center justify-center rounded-lg relative bg-transparent my-2"
    >
      <button
        data-action="decrement"
        class="input-group-button m-0 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 rounded-l cursor-pointer"
      >
        <span class="input-number-decrement">−</span>
      </button>
      <input id="input-number" class="text-center bg-gray-300 font-semibold text-md rounded-none hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 dark:bg-transparent dark:text-white"
      name="custom-input-number"
      placeholder="Length" type="number" min="1" max="30" step="1"
      x-model="charsLength" @input="generatePassword()"/>
      <button
        data-action="increment"
        class="input-group-button m-0 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 rounded-r cursor-pointer"
      >
        <span class="input-number-increment">+</span>
      </button>
    </div>

    <input
      class="w-full"
      type="range"
      x-model="charsLength"
      min="1"
      max="30"
      step="1"
      @input="generatePassword()"
    />
  </div>
  <div class="flex -mx-2 mb-2">
    <div class="w-1/2 px-2">
      <label for="charsLower">
        <input
          type="checkbox"
          class="align-middle"
          id="charsLower"
          @input="generatePassword()"
          checked
        />
        <span class="text-xs font-semibold text-gray-500">LOWERCASE</span>
      </label>
    </div>
    <div class="w-1/2 px-2">
      <label for="charsUpper">
        <input
          type="checkbox"
          class="align-middle"
          id="charsUpper"
          @input="generatePassword()"
          checked
        />
        <span class="text-xs font-semibold text-gray-500">UPPERCASE</span>
      </label>
    </div>
  </div>
  <div class="flex -mx-2">
    <div class="w-1/2 px-2">
      <label for="charsNumeric">
        <input
          type="checkbox"
          class="align-middle"
          id="charsNumeric"
          @input="generatePassword()"
          checked
        />
        <span class="text-xs font-semibold text-gray-500">NUMBERS</span>
      </label>
    </div>
    <div class="w-1/2 px-2">
      <label for="charsSymbols">
        <input
          type="checkbox"
          class="align-middle"
          id="charsSymbols"
          @input="generatePassword()"
          checked
        />
        <span class="text-xs font-semibold text-gray-500">SYMBOLS</span>
      </label>
    </div>
  </div>
</div>`

const PwdApp = () => {
  const [password, setPassword] = useState('')
  const [passwordProps, setPasswordProps] = useState()
  const [tooltip, setTooltip] = useState(false)
  const [showPasswordField, setShowPasswordField] = useState(true)
  const [rangeValue, setRangeValue] = useState(12)
  const [formData, setFormData] = useState('')
  const [checked, setChecked] = useState([])
  const [checkedName, setCheckedName] = useState('')
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: 'uppercase',
      label: 'Uppercase',
      isChecked: true,
    },
    {
      id: 1,
      name: 'lowercase',
      label: 'Lowercase',
      isChecked: true,
    },
    {
      id: 2,
      name: 'symbols',
      label: 'Symbols',
      isChecked: true,
    },
    {
      id: 3,
      name: 'numbers',
      label: 'Numbers',
      isChecked: true,
    },
  ])

  const passwordRef = useRef(null)

  const generateNewPassword = () => {
    const pwd =
      rangeValue > 3
        ? generatePassword(passwordProps, rangeValue)
        : generatePassword(passwordProps, 3)
    setPassword(pwd)
  }
  
  useEffect(() => {
    setFormData(new FormData())
  }, [])

  const handleToggle = (c) => () => {
    // return the first index or -1
    const checkedCount = checked.indexOf(c)
    const name = [...checked]

    const disabled = checkedCount === -1
    if (disabled) {
      name.push(c)
    } else {
      name.splice(checkedCount, 1)
    }
    console.log(name)
    setChecked(name)
    setCheckedName(name)
    formData.set('categories', name)
  }

  const showCategories = () => {
    return categories.map((c, i) => (
      <div className="col-md-6" key={i}>
        <label htmlFor={c.id} className="list-unstyled">
          <input
            id={c.id}
            onChange={handleToggle(c.name)}
            type="checkbox"
            className="mr-2 bg-gray-300 appearance-none checked:bg-teal-600 checked:border-transparent"
          />
          <span className="mr-2 text-xs font-semibold text-gray-500 uppercase">
            {c.label}
          </span>
        </label>
      </div>
    ))
  }
  const handleEyeClick = () => {
    setShowPasswordField(!showPasswordField)
  }

  const onChangeSlider = (e) => {
    setPasswordLength(e.target.value)
    setRangeValue(e.target.value)
  }

  const copyClipBoard = (e) => {
    e.preventDefault()
    copyToClipBoard(passwordRef.current)
    setTooltip(true)
    setTimeout(() => {
      setTooltip(false)
    }, 2000)
  }

  return (
    <>
      <div
        className="px-3 py-5 mx-auto text-gray-800 bg-white rounded-lg shadow md:py-5 md:px-1 dark:bg-transparent dark:border dark:text-white dark:border-gray-400"
        style={{ maxWidth: `500px` }}
      >
        <div className="relative mb-2">
          <input
            ref={passwordRef}
            type="text"
            id="password"
            className="w-full py-2 pl-3 pr-10 transition-colors border-2 border-gray-200 rounded-md dark:bg-transparent dark:text-white focus:outline-none focus:border-cyan-400"
            placeholder="Password"
            value={password}
            readOnly
          />
          <button
            className="absolute block text-xl text-center text-gray-400 transition-colors w-7 h-7 leading-0 top-2 right-2 focus:outline-none hover:text-cyan-400"
            onClick={handleEyeClick}
          >
            <i
              id="eye-icon"
              className={
                showPasswordField
                  ? 'mdi mdi-eye-outline'
                  : 'mdi mdi-eye-off-outline'
              }
            />
          </button>
        </div>
        <div className="flex -mx-1">
          <div className="w-1/5 px-1">
            <div className="h-2 transition-colors rounded-xl">
              passwordScore
            </div>
          </div>
        </div>
        <hr className="my-5 border border-gray-200" />
        <div className="flex flex-wrap items-center mb-2 space-y-2">
          <label className="block text-xs font-semibold text-gray-500 col-md-4">
            <span className="absolute -top-5">PASSWORD LENGTH</span>
            <input
              className="relative w-full px-3 py-2 text-white transition-colors border border-gray-200 rounded-md dark:bg-transparent focus:outline-none focus:border-teal-500"
              placeholder="Length"
              value={rangeValue}
              onChange={onChangeSlider}
              type="number"
              min={1}
              max={30}
              step={1}
            />
          </label>
          <SliderBar
            min={1}
            max={30}
            step={1}
            defaultLength={parseInt(rangeValue, 10)}
            value={parseInt(rangeValue, 10)}
            onChangeValue={onChangeSlider}
          />
        </div>
        <div className="flex items-center justify-start mb-2 -mx-2 row">
          {showCategories()}
        </div>
      </div>
      <p>test</p>
      <div className="w-full bg-dark-400">
        <div className="flex flex-col">
          <p>
            Tooltip on{' '}
            <Tooltip
              position="top"
              tooltipContent="tooltip on <strong>top</strong>"
            >
              top
            </Tooltip>
          </p>
          <p>
            Tooltip on{' '}
            <Tooltip
              position="right"
              tooltipContent="tooltip on <strong>right</strong>"
            >
              right
            </Tooltip>
          </p>
          <p>
            Tooltip on{' '}
            <Tooltip
              position="bottom"
              tooltipContent="tooltip on <strong>bottom</strong>"
            >
              bottom
            </Tooltip>
          </p>
          <p>
            Tooltip on{' '}
            <Tooltip
              position="left"
              tooltipContent="tooltip on <strong>left</strong>"
            >
              left
            </Tooltip>
          </p>
        </div>
        <div className="flex items-center content-center space-x-4">
          <button onClick={copyClipBoard}>
            <Tooltip
              displayTooltip={tooltip}
              position="top"
              tooltipContent="tooltip on <strong>top</strong>"
            >
              <i className="far fa-copy" />
            </Tooltip>
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="mx-auto h-200">
          <h2>CheckBoxList</h2>
          <div className="flex mb-2 -mx-2">
            <div className="w-1/2 px-2">{showCategories()}</div>
          </div>
          <h2>Form Data</h2>
          {JSON.stringify(...formData)}
        </div>
      </div>
    </>
  )
}

export default PwdApp
