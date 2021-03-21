import React, { useState, useCallback } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value)
    },
    [setValue]
  )

  return { value, handleChange, setValue }
}

export default useInput

// 使用方式
// const App = () => {
//   const { value, handleChange } = useInput('')
//   return (
//     <>
//       <label htmlFor="input-example">
//         Input Value: {value}
//         <input
//           id="input-example"
//           type="text"
//           value={value}
//           onChange={handleChange}
//         />
//       </label>
//     </>
//   )
// }
