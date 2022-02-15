import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  div.category {
    text-overflow: ellipsis;
  }  
`

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  margin: 20px;
  img {
    width: 100%;
    height: 176px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primaryDarkBackground}
  }
`
