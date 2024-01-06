import RangeSlider from '../../../components/UIComponents/RangeSlider/RangeSlider'

export default {
    title: 'UIComponents/RangeSlider/RangeSlider',
    component: RangeSlider,
    tags: ['autodocs'],
    argTypes: {
        max: { control: 'number' },
        min: { control: 'number' },
        step: { control: 'number' },
        minValue: { control: 'number' },
        maxValue: { control: 'number' },
        gapValue: { control: 'number' },
        tooltip: {
            control: {
                type: 'radio',
                options: ['top', 'bottom'],
            },
        },
    },
}

export const SimpleRangeSlider = args => <RangeSlider {...args} />
SimpleRangeSlider.args = {
    min: 0,
    step: 1,
    max: 100,
    gapValue: 25,
    minValue: 10,
    maxValue: 80,
}

export const TopLabelRangeSlider = args => <RangeSlider {...args} />
SimpleRangeSlider.args = {
    min: 0,
    step: 1,
    max: 100,
    tooltip: 'top',
    gapValue: 25,
    minValue: 10,
    maxValue: 80,
}

export const BottomLabelRangeSlider = args => <RangeSlider {...args} />
SimpleRangeSlider.args = {
    min: 0,
    step: 1,
    max: 100,
    tooltip: 'bottom',
    gapValue: 25,
    minValue: 10,
    maxValue: 80,
}