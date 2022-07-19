import { fireEvent, render } from '@testing-library/react';
import ListItem from './index';

describe('Test ListItem Component', () => {
  const callback = jest.fn();
  const text = 'sample to do';

  const component = ({ done }) => (
    <ListItem text={text} done={done} onFinish={callback} onRemove={callback} />
  );

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { asFragment } = render(component({ done: false }));
    expect(asFragment).toMatchSnapshot();
  });

  it('should item be done', () => {
    const { asFragment, getByText } = render(component({ done: true }));
    const p = getByText(text);

    expect(asFragment).toMatchSnapshot();
    expect(p.className).toContain('done');
  });

  it('should click on callbacks', () => {
    const { asFragment, getAllByTestId } = render(component({ done: false }));
    const buttons = getAllByTestId('button');

    buttons.forEach((btn) => {
      fireEvent.click(btn);
    });

    expect(asFragment).toMatchSnapshot();
    expect(callback).toBeCalledTimes(2);
  });
});
