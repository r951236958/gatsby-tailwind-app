import React from 'react'
import 'alpinejs'
import zxcvbn from 'zxcvbn'

// const showPwd = (showPasswordField) => {
//     if (showPasswordField) {
//       document
//         .querySelector('#eye-icon')
//         .classList.remove('mdi-eye-off-outline')
//       document.querySelector('#eye-icon').classList.add('mdi-eye-outline')
//     } else {
//         document
//           .querySelector('#eye-icon')
//           .classList.remove('mdi-eye-outline')
//         document.querySelector('#eye-icon').classList.add('mdi-eye-off-outline')
//     }
// }

window.app = function() {
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

const PwdGen = () => {
  
  return (
    // eslint-disable-next-line react/no-danger
    <div className="min-h-screen">
      <div className="mt-6">
        <div dangerouslySetInnerHTML={{ __html: alpineApp }} />
      </div>
    </div>
  )
}

export default PwdGen
