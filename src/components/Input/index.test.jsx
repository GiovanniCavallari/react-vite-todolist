import { render, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Test Input Component', () => {
  const onChange = jest.fn();

  const component = (
    <Input
      label="label"
      name="name"
      placeholder="placeholder"
      value=""
      onChange={onChange}
    />
  );

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { asFragment, getByText, getByPlaceholderText } = render(component);
    const input = getByPlaceholderText('placeholder');
    const label = getByText('label');

    expect(asFragment).toMatchSnapshot();
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('should change value and call onChange prop', () => {
    const { getByPlaceholderText } = render(component);
    const element = getByPlaceholderText('placeholder');

    fireEvent.change(element, {
      target: { value: 'value' },
    });

    expect(onChange).toBeCalled();
  });
});
