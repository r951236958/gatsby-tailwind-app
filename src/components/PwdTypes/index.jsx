import React, {useState} from 'react'

const PwdTypes = () => {
    const [type, setType] = useState('password')

    const onSelectTag = (e) => {
      setType(e.target.value)
    }
    return (
      <>
        <div>
          <select
            name="type"
            value={type}
            onChange={onSelectTag}
            className="mb-4 -ml-1 border border-gray-300 rounded-md outline-none dark:bg-transparent ring-0 focus:ring-0 focus:ring-transparent dark:text-white"
            // style={selectTagStyle}
          >
            <option className="dark:text-white" value="password">
              Random Password
            </option>
            <option className="dark:text-white" value="pin">
              PIN
            </option>
          </select>
        </div>
      </>
    )
}

export default PwdTypes
