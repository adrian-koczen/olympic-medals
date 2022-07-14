import React, { useState } from "react";
// Styled components
import styled from "styled-components";
// Components
import Error from "src/components/Error/Error";
// Icons
import { ReactComponent as DownArrow } from "src/icons/downArrow.svg";

interface Props {
  countries: Object;
  placeholder: string;
  errors: string | undefined;
  setValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  setError: (field: string, value: string | undefined) => void;
}

const Select = ({
  countries,
  placeholder,
  setValue,
  setError,
  errors,
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleListVisibility = () => {
    setIsActive((prev) => !prev);
  };

  const handleSelectOption = (
    countryName: string,
    imageSrc: string,
    countryCode: string
  ) => {
    handleListVisibility();
    setValue("countryCode", countryCode, false);
    setValue("countryName", countryName, false);
    setValue("imageSrc", imageSrc, false);
    setError("countryCode", undefined);
  };

  return (
    <Container>
      <DropButton onClick={handleListVisibility}>
        <DropButtonText>{placeholder}</DropButtonText>
        <DropButtonIcon />
      </DropButton>
      {isActive && (
        <List>
          {Object.entries(countries).map(([key, value], index) => {
            return (
              <Option
                key={index}
                onClick={() =>
                  handleSelectOption(value.fullName, value.imageSrc, key)
                }
              >
                {value.fullName}
              </Option>
            );
          })}
        </List>
      )}
      {errors !== undefined && <Error>{errors}</Error>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const List = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.darkGray};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

const Option = styled.div`
  cursor: pointer;
  margin: 8px 8px;
  color: ${({ theme }) => theme.colors.gray};
`;

const DropButton = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px 0;
  padding: 1px 8px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const DropButtonText = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
`;

const DropButtonIcon = styled(DownArrow)`
  width: 20px;
  height: 20px;
`;

export default Select;
