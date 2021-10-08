import React from 'react'
import Styled from './RegisterDropDown.styled'
import DownArrow from '../../../../../assets/CustomIcons/chevron-down.svg'
import P from '../../../../shared/P/P'
import { TypoGraphyCategory } from '../../../../lib/css/TempTypo'
import Palette from '../../../../lib/css/Pallete'
import DropDown from '../../../../shared/DropDown/DropDown'
import { useCallback } from 'react'
import { useState } from 'react'

export interface WhiskyCategoryProps {
    eng_name: string
    kor_name: string
    idx: number
}

interface RegisterDropDownProps {
    selectedValue?: string;
    onClick: (val: WhiskyCategoryProps) => void;
    valueList: Array<WhiskyCategoryProps>;
}



function RegisterDropDown({
    selectedValue,
    onClick,
    valueList,
}: RegisterDropDownProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(open => !open);
    }

     const renderDropdownItem = useCallback((item: WhiskyCategoryProps) => (
        <Styled.DropdownItemWrapper key={item.eng_name} onClick={() => onClick(item)}>
            <P size={TypoGraphyCategory.body2}>{item.kor_name}</P>
            <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}>{item.eng_name}</P>
        </Styled.DropdownItemWrapper>
    ),[])

    return (
        <Styled.RegisterDropDownWrapper onClick={handleOpen}>
            {selectedValue && <P
             size={TypoGraphyCategory.body2} 
             color={Palette.SemiBlack}> {selectedValue}</P>}
            <Styled.RegisterDropDownIcon>
            <DownArrow/>
            </Styled.RegisterDropDownIcon>
           {open &&  <DropDown >
                {valueList.map(renderDropdownItem)}
            </DropDown>}
        </Styled.RegisterDropDownWrapper>
    )
}

export default RegisterDropDown
