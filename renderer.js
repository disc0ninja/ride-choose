// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const rioseBtnElem = document.getElementById('riose-btn')
const choiceElem = document.getElementById('choice')

rioseBtnElem.addEventListener('click', (event) => {
  const options = ['Dirty Old Chevrolet', 'Mazda', 'Danger Ranger', 'Motor-Bicycles']
  const max = 100000000000
  const min = 1
  const ans = Math.random() *(max - min) + min

  // variables used to determine vehicle choice
  const optionOneMax = (max / options.length)
  const optionTwoMax = optionOneMax * 2
  const optionThreeMax = optionOneMax * 3

  if (ans <= optionOneMax && ans >= min) {
    choiceElem.innerHTML = options[0]
  }else if (ans > optionOneMax && ans <= optionTwoMax) {
    choiceElem.innerHTML = options[1]
  }else if (ans > optionTwoMax && ans <= optionThreeMax) {
    choiceElem.innerHTML = options[2]
  }else if (ans > optionThreeMax && ans <= max) {
    choiceElem.innerHTML = options[3]
  }else {
    choiceElem.innerHTML = 'Something Went Wrong ...'
    choiceElem.style.color = "red"
  }
})
