import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessProductsCategories as ProductsCategories } from 'ordering-components'
import { AutoScroll } from '../../../../../components/AutoScroll'
import { CategoriesContainer, CategoryCard } from './styles'
import { Tabs, Tab } from '../../styles/Tabs'
import dummyProduct from '../../../../../../template/assets/images/dummies/product.png'
const BusinessProductsCategoriesUI = (props) => {
  const {
    isSkeleton,
    categories,
    handlerClickCategory,
    categorySelected,
    featured,
    openBusinessInformation,
    sideCategory
  } = props
  const ProductCategories = () => {
    return (
      categories && categories.length && categories.map(category => (
        <CategoryCard
          key={category.name}
          className={`category ${category.id === 'featured' ? 'special' : ''}`}
          active={categorySelected?.id === category.id}
          onClick={() => handlerClickCategory(category)}
          borderBottom={!sideCategory}
          vertical={sideCategory}
        >
          <img src={
            category?.image
              ? category.image
              : category?.products.find(product => typeof product.images === 'string' && product.images.length > 0)
                ? category?.products[0]?.images
                : dummyProduct
          }
          />
          {category.name}
        </CategoryCard>
      ))
    )
  }
  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CategoriesContainer>
        {!isSkeleton ? (
          <>
            {openBusinessInformation ? (
              <>
                <ProductCategories />
              </>
            ) : (
              <>
                {sideCategory
                  ? (
                    <ProductCategories />)
                  : (
                    <AutoScroll>
                      <ProductCategories />
                    </AutoScroll>)}
              </>
            )}
          </>
        ) : (
          <Tabs variant='primary'>
            {[...Array(4).keys()].map(i => (
              <Tab key={i}>
                <Skeleton width={100} />
              </Tab>
            ))}
          </Tabs>
        )}
      </CategoriesContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
export const BusinessProductsCategories = (props) => {
  const businessProductsCategoriesProps = {
    ...props,
    UIComponent: BusinessProductsCategoriesUI
  }
  return (
    <ProductsCategories {...businessProductsCategoriesProps} />
  )
}
