import React from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import P from '../../../../shared/P/P'
import Styled from './RegisterInput.styled'

interface RegisterInputProps {
    placeholder?: string;
    onChange: (value: string) => void
    onFocus?: () => void
    onBlur?: () => void
    value: string
    unit?: string
}

function RegisterInput({
    placeholder,
    onChange,
    onFocus,
    onBlur,
    value,
    unit,
}: RegisterInputProps) {
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange(value)
    },[])

    const handleFoucs = useCallback(() => {
        if(onFocus)
            onFocus()
    },[])
    const handleBlur = useCallback(() => {
        if(onBlur)
            onBlur()
    },[])

    return useMemo(() =>(
        <Styled.RegisterInputWrapper>
            <Styled.RegisterInput 
                placeholder={placeholder}
                onChange={handleInputChange}
                onFocus={handleFoucs}
                onBlur={handleBlur}
                value={value}
                />
            {unit && <Styled.RegisterInputUnit>
                <P>{unit}</P>
            </Styled.RegisterInputUnit>}
        </Styled.RegisterInputWrapper>
    ),[value,handleInputChange,placeholder])
}

export default React.memo(RegisterInput)
