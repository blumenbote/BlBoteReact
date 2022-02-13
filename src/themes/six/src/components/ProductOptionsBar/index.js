import React, { useEffect, useState } from 'react'
// import {
//   useLanguage
// } from 'ordering-components'
import {
  OptionsBarContainer,
  OptionSelector
} from './styles'

export const ProductOptionsBar = (props) => {
  const {
    extras,
    selected,
    setSelected
  } = props

  // const [, t] = useLanguage()
  const [options, setOptions] = useState([])

  useEffect(() => {
    const _optionsList = extras?.reduce((allOptions, extra) => {
      allOptions = [...allOptions, ...extra.options]
      allOptions = allOptions.filter(option => option.enabled)
      return allOptions
    }, [])
    const _optionsReduced = _optionsList.reduce((reducer, option) => {
      reducer.push({ id: option.id, name: option.name, min: option.min })
      return reducer
    }, [])

    const _optionsSorted = _optionsReduced.sort((option1, option2) => {
      if (option1.min === 0 && option2.min >= 1) {
        return 1
      } else if (option1.min >= 1 && option2.min === 0) {
        return -1
      } else {
        return 0
      }
    })
    const _options = [..._optionsSorted, { id: -1, name: 'Comments' }]
    setOptions(_options)
    setSelected(_options[0])
  }, [])

  const handleOptionClick = (id) => {
    const _selectedOption = options.find(option => option.id === id)
    setSelected(_selectedOption)
  }
  return (
    <OptionsBarContainer>
      {options.map(option => {
        return (
          <OptionSelector
            key={option.id}
            className={option.id === selected.id ? 'selected' : ''}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.name}
          </OptionSelector>
        )
      })}
    </OptionsBarContainer>
  )
}
