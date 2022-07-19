import { fireEvent, render } from '@testing-library/react';
import ToDo from './index';

describe('Test ToDo Page', () => {
  const component = <ToDo />;

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { asFragment } = render(component);
    expect(asFragment).toMatchSnapshot();
  });

  it('should add a new item on to do list', () => {
    const { asFragment, getByPlaceholderText, getByText, getAllByTestId } = render(component);

    const input = getByPlaceholderText('Type here...');
    const button = getByText('Add');

    fireEvent.change(input, {
      target: { value: 'My test To Do' },
    });

    fireEvent.click(button);

    const listItems = getAllByTestId('list-item');

    expect(asFragment).toMatchSnapshot();
    expect(listItems.length).toBe(2);
  });

  it('should finish an item on to do list', () => {
    const { asFragment, getAllByTestId, getByText } = render(component);

    const finish = getAllByTestId('button')[1];
    fireEvent.click(finish);

    const p = getByText('Sample To Do');

    expect(asFragment).toMatchSnapshot();
    expect(p.className).toContain('done');
  });

  it('should remove an item on to do list', () => {
    const { asFragment, getByPlaceholderText, getByText, getAllByTestId } = render(component);

    const input = getByPlaceholderText('Type here...');
    const button = getByText('Add');

    fireEvent.change(input, {
      target: { value: 'My test To Do' },
    });

    fireEvent.click(button);

    const remove = getAllByTestId('button')[2];
    fireEvent.click(remove);

    const listItems = getAllByTestId('list-item');

    expect(asFragment).toMatchSnapshot();
    expect(listItems.length).toBe(1);
  });
});
