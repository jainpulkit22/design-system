import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, CloseButton, Text } from 'pcln-design-system'

const HeaderWrapper = styled(Flex)`
  height: 40px;
`

const StyledCloseButton = styled(CloseButton)`
  margin-right: 8px;
  svg {
    vertical-align: top;
  }
  &:focus {
    outline: none;
  }
`

const ModalHeader = ({ bg, color, onClose, title }) => (
  <HeaderWrapper align="center" color={color} bg={bg} px={3}>
    {title && (
      <Text fontSize={1} bold>
        {title}
      </Text>
    )}
    {onClose && <StyledCloseButton onClick={onClose} ml="auto" />}
  </HeaderWrapper>
)

ModalHeader.displayName = ModalHeader

ModalHeader.propTypes = {
  bg: PropTypes.string,
  onClose: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string
}

ModalHeader.defaultProps = {
  bg: 'blue',
  color: 'white'
}

export default ModalHeader