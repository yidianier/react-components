import styled, { css } from 'styled-components';

import { inlineBlockWithVerticalMixin } from 'src/style';
import Icon from 'src/components/Icon';
import Button from 'src/components/Button';
import addDefaultThemeProps from 'src/components/ThemeProvider/addDefaultThemeProps';

export const RadioIcon = styled(Icon)`
    margin-right: 8px;
    font-size: 14px;
`;

const radioCommonStyleMixin = ({ theme: { colorMap, fontSize } }) => css`
    color: ${colorMap.default.text};
    font-size: ${fontSize};
    position: relative;
    cursor: pointer;
`;

const sizeMixin = ({ theme: { Height }, size }) => css`
    height: ${Height[size]};
    line-height: ${Height[size]};
`;

/* stylelint-disable no-duplicate-selectors */
export const RadioWrap = styled.div`
    ${radioCommonStyleMixin};

    ${inlineBlockWithVerticalMixin};

    ${sizeMixin};

    ${({ checked, theme: { colorMap } }) =>
        checked &&
        css`
            ${RadioIcon} {
                color: ${colorMap.active.icon};
            }
        `};

    ${({ disabled, theme: { colorMap } }) =>
        disabled &&
        css`
            color: ${colorMap.disabled.text};
            cursor: not-allowed;
            pointer-events: none;

            ${RadioIcon} {
                color: ${colorMap.disabled.icon};
            }
        `};
`;

export const RadioButtonWrap = styled(Button)`
    min-width: 50px;
    text-align: center;
    border: 1px solid ${({ theme: { colorMap } }) => colorMap.default.border};
    border-radius: 0;

    ${radioCommonStyleMixin};

    ${({ disabled }) =>
        disabled &&
        css`
            z-index: 1;
        `};

    ${({ checked, theme: { colorMap } }) =>
        checked &&
        css`
            border-color: ${colorMap.active.border};
            color: ${colorMap.active.text};
            z-index: 2;
        `};

    &:hover {
        z-index: 3;
    }
`;

export const RadioTagWrap = styled.div`
    padding: 0 8px;
    cursor: pointer;
    border-radius: 2px;

    ${radioCommonStyleMixin};

    ${inlineBlockWithVerticalMixin};

    ${sizeMixin};

    ${({ checked, theme: { colorMap } }) =>
        checked &&
        css`
            background-color: ${colorMap.active.background};
            color: ${colorMap.active.text};
        `};

    ${({ disabled, theme: { colorMap } }) =>
        disabled &&
        css`
            color: ${colorMap.disabled.text};
            cursor: not-allowed;
            pointer-events: none;
        `};
`;

export const RadioCardHeader = styled.div`
    position: relative;
    padding: 8px 16px;
    line-height: 22px;
    min-height: 22px;
`;
export const RadioCardContent = styled.div`
    padding: 16px;
    min-height: 20px;
`;
const RadioCardTipPosition = css`
    position: absolute;
    right: 12px;
    top: 10px;
`;
export const RadioCardIcon = styled(Icon)`
    font-size: 16px;
    color: #c3cad9;
    ${RadioCardTipPosition};
`;
export const RadioCardDisabledLabelWrap = styled.span`
    font-weight: bold;
    line-height: 16px;
    ${RadioCardTipPosition};
`;
const propsMixin = ({ theme: { colorMap, colorList, titleFontSize }, disabled, checked }) => css`
    border: 1px solid ${colorMap.default.border};

    ${!checked &&
        !disabled &&
        css`
            :hover {
                box-shadow: 0px 2px 4px 0px rgba(228, 229, 242, 1), 0px 1px 1px 0px rgba(162, 166, 191, 0.32),
                    0px 1px 0px 0px rgba(223, 224, 241, 0.7);
                border-color: transparent;
            }
        `};

    ${RadioCardHeader} {
        background: #f6f6fb;
        color: ${colorList.title};
        font-size: ${titleFontSize};
    }
    ${checked &&
        css`
            border-color: ${colorMap.active.border};
            box-shadow: 0px 2px 4px 0px rgba(228, 229, 242, 1), 0px 1px 1px 0px rgba(162, 166, 191, 0.32);
            ${RadioCardHeader} {
                background: ${colorList.primary};
                color: white;
            }
            ${RadioCardIcon} {
                color: white;
            }
        `};
    ${!disabled &&
        !checked &&
        css`
            ${RadioCardIcon} {
                border-radius: 50%;
                background: white;
            }
        `};
    ${disabled &&
        css`
            cursor: not-allowed;
        `};
    ${disabled &&
        !checked &&
        css`
            border-color: ${colorMap.disabled.border};
            ${RadioCardHeader} {
                background: #bbb;
                color: white;
            }
            ${RadioCardContent} {
                background: #f7f7f7;
                color: #bbb;
            }
        `};
    ${disabled &&
        checked &&
        css`
            ${RadioCardIcon} {
                color: #adbaf3;
            }
        `};
`;
export const RadioCardWrap = styled.div`
    border-radius: 4px;
    overflow: hidden;
    min-width: 150px;
    display: inline-block;
    cursor: pointer;

    ${propsMixin};
`;

export const RadioGroupWrap = styled.div`
    margin-bottom: -8px;
    ${RadioWrap}, ${/* sc-sel */ RadioTagWrap}, ${RadioCardWrap} {
        margin-right: 8px;
        margin-bottom: 8px;

        &:last-child {
            margin-right: 0;
        }
    }

    ${RadioButtonWrap} {
        margin-right: -1px;
        margin-bottom: 8px;
        &:first-child {
            border-radius: 2px 0 0 2px;
        }
        &:last-child {
            border-radius: 0 2px 2px 0;
            margin-right: 0;
        }
    }
`;

addDefaultThemeProps(RadioWrap, RadioButtonWrap, RadioTagWrap, RadioCardWrap);