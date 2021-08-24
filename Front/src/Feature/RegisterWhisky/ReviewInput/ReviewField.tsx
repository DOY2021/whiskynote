import React, { useMemo } from 'react'
import Styled from './ReviewInput.styled'

interface ReviewFieldProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function ReviewField({
  title,
  subtitle,
  children
}: ReviewFieldProps) {
  return (
    useMemo(() => (
      <Styled.ReviewInputWrapper>
        <Styled.ReviewTitleWrapper hasSubtitle={subtitle ? true : false}>
          <Styled.ReviewInputTitle>{title}</Styled.ReviewInputTitle>
          {subtitle &&  <Styled.ReviewInputSubTitle>{subtitle}</Styled.ReviewInputSubTitle>}
        </Styled.ReviewTitleWrapper>
        <Styled.ReviewContentWrapper>
          {children}
        </Styled.ReviewContentWrapper>
      </Styled.ReviewInputWrapper>
    ),[
      subtitle,
      title,
      children,
    ])
  )
}

export default ReviewField
