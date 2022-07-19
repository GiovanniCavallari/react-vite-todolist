import { fireEvent, render } from '@testing-library/react';
import List from './index';

describe('Test List Component', () => {
  const callback = jest.fn();

  const items = [
    {
      text: 'Sample To Do',
      done: false,
    },
    {
      text: 'Sample Do To',
      done: true,
    },
  ];

  const component = (
    <List items={items} onFinish={callback} onRemove={callback} />
  );

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { asFragment } = render(component);
    expect(asFragment).toMatchSnapshot();
  });

  it('should click on callbacks', () => {
    const { asFragment, getAllByTestId } = render(component);
    const buttons = getAllByTestId('button');

    buttons.forEach((btn) => {
      fireEvent.click(btn);
    });

    expect(asFragment).toMatchSnapshot();
    expect(callback).toBeCalledTimes(4);
  });
});
