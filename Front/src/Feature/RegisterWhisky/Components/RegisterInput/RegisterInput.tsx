import React from 'react'
import { useCallback } from 'react'
import P from '../../../../shared/P/P'
import Styled from './RegisterInput.styled'

interface RegisterInputProps {
    placeholder?: string;
    onChange: (value: string) => void
    value: string
    unit?: string
}

function RegisterInput({
    placeholder,
    onChange,
    value,
    unit,
}: RegisterInputProps) {
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange(value)
    },[])

    return (
        <Styled.RegisterInputWrapper>
            <Styled.RegisterInput 
                placeholder={placeholder}
                onChange={handleInputChange}
                value={value}
                />
            {unit && <Styled.RegisterInputUnit>
                <P>%</P>
            </Styled.RegisterInputUnit>}
        </Styled.RegisterInputWrapper>
    )
}

export default React.memo(RegisterInput)
