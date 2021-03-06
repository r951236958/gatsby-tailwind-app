import React, { useState, useEffect, useMemo } from 'react'

// import IconButton from 'components/IconButton'
import SliderBar from 'components/SliderBar'
import CheckBox from 'components/CheckBox'
import {
  generatePassword,
  setPasswordLength,
  copyToClipBoard,
} from 'utils/Helper'

const CHECKBOX_LIST = [
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
]

const PwdContainer = (props) => {
  const { setPassword, setRange, setPasswordProps, passwordRef, type } = props

  const [rangeValue, setRangeValue] = useState(12)
  const [checkbox, setCheckBox] = useState({
    uppercase: true,
    lowercase: true,
    symbols: true,
    numbers: true,
  })
  const [checked, setChecked] = useState(false)
  const [checkedName, setCheckedName] = useState('')
  const [minMaxValue, setMinMaxValue] = useState({
    min: 1,
    max: 60,
  })

  const { uppercase, lowercase, symbols, numbers } = checkbox
  const { min, max } = minMaxValue

  useEffect(() => {
    setPasswordLength(rangeValue)
    setRange(rangeValue)
    setRangeValue(rangeValue)
    passwordGenerated(checkbox, rangeValue)

    checkBoxCount()

    // eslint-disable-next-line
  }, [uppercase, lowercase, symbols, numbers])

  const checkBoxCount = () => {
    const checkedCount = Object.keys(checkbox).filter((key) => checkbox[key])
    const disabled = checkedCount.length === 1
    const name = checkedCount[0]
    if (disabled) {
      setChecked(disabled)
      setCheckedName(name)
    } else {
      setChecked(false)
      setCheckedName('')
    }
  }

  const updateCheckBoxes = () => {
    if (type === 'pin') {
      CHECKBOX_LIST.map((checkbox) => {
        const name = checkbox.name
        if (name !== 'numbers') {
          checkbox.isChecked = false
          const checkboxProps = {
            name,
            checkedName: name,
            checked: true,
            isChecked: checkbox.isChecked,
            min: 0,
            max: 15,
            length: 3,
          }
          checkBoxProperties(checkboxProps)
        }
        return ''
      })
    } else {
      CHECKBOX_LIST.map((checkbox) => {
        const name = checkbox.name
        checkbox.isChecked = true
        const checkboxProps = {
          name,
          checkedName: '',
          checked: false,
          isChecked: checkbox.isChecked,
          min: 1,
          max: 60,
          length: 12,
        }
        checkBoxProperties(checkboxProps)
        return ''
      })
    }
  }

  const checkBoxProperties = (checkBoxProps) => {
    const {
      name,
      checked,
      isChecked,
      checkedName,
      min,
      max,
      length,
    } = checkBoxProps

    setCheckBox((prevState) => ({ ...prevState, [name]: isChecked }))
    setChecked(checked)
    setCheckedName(checkedName)
    setPasswordLength(length)
    setMinMaxValue({ min, max })
    setRangeValue(length)
    setRange(length)
  }

  useMemo(updateCheckBoxes, [type])

  const passwordGenerated = (checkbox, rangeValue) => {
    const pwd =
      rangeValue > 3
        ? generatePassword(checkbox, rangeValue)
        : generatePassword(checkbox, 3)
    setPassword(pwd)
    setPasswordProps(checkbox)
  }

  const onChangeSlider = (e) => {
    setPasswordLength(e.target.value)
    setRangeValue(e.target.value)
    setRange(e.target.value)
    passwordGenerated(checkbox, e.target.value)
  }

  const onChangeCheckBox = (e) => {
    if (type !== 'pin') {
      let { name, checked } = e.target
      CHECKBOX_LIST.map((checkbox) => {
        if (checkbox.name === name) {
          checkbox.isChecked = checked
          setCheckBox((prevState) => ({
            ...prevState,
            [name]: checkbox.isChecked,
          }))
          setPasswordLength(rangeValue)
          setRangeValue(rangeValue)
        }

        return ''
      })
    }
  }

  const copyClipBoard = (elementRef) => (e) => {
    e.preventDefault()
    copyToClipBoard(elementRef)
  }

  return (
    <div className="password-settings">
      <h3 className="h3">Use the slider, and select from the options.</h3>

      <div className="pwsSliderbar">
          <div className="form-group">
            &nbsp;
            <SliderBar
              min={parseInt(min, 10)}
              max={parseInt(max, 10)}
              step={1}
              defaultLength={parseInt(rangeValue, 10)}
              value={parseInt(rangeValue, 10)}
              onChangeValue={onChangeSlider}
            />
          </div>
        

        <div className="checkbox-grid">
          {CHECKBOX_LIST.map((checkbox) => (
            <CheckBox
              key={checkbox.id}
              name={checkbox.name}
              checked={checkbox.isChecked}
              label={checkbox.label}
              value={checkbox.isChecked}
              onChange={onChangeCheckBox}
              disabled={
                checked && checkbox.isChecked && checkedName === checkbox.name
              }
            />
          ))}
        </div>
      </div>
      <br />

      <div className="text-center PwdBottom">
        <div className="row">
          <div className="col-md-12">
            <button
              className="px-3 py-2 mx-auto text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:text-gray-200"
              onClick={copyClipBoard(passwordRef.current)}
            >
              Copy Password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PwdContainer }
