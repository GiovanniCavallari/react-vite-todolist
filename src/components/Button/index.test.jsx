import { render } from '@testing-library/react';
import Button from './index';

describe('Test Button Component', () => {
  const onClick = jest.fn();
  const children = 'button';

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const component = <Button onClick={onClick}>{children}</Button>;

    const { asFragment, getByText } = render(component);
    const element = getByText(children);

    expect(asFragment).toMatchSnapshot();
    expect(element.className).toContain('btn-neutral');
  });

  it('should render button with type success', () => {
    const component = (
      <Button type="success" onClick={onClick}>
        {children}
      </Button>
    );

    const { asFragment, getByText } = render(component);
    const element = getByText(children);

    expect(asFragment).toMatchSnapshot();
    expect(element.className).toContain('btn-success');
  });

  it('should render button with type danger', () => {
    const component = (
      <Button type="danger" onClick={onClick}>
        {children}
      </Button>
    );

    const { asFragment, getByText } = render(component);
    const element = getByText(children);

    expect(asFragment).toMatchSnapshot();
    expect(element.className).toContain('btn-danger');
  });
});
