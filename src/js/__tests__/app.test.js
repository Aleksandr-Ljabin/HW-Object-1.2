import specialDestr from '../app';

test('getting information about the characters health', () => {
  const input = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const expected = [
    {
      id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
    },
    {
      id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
    },
  ];
  const received = specialDestr(input);
  expect(received).toEqual(expected);
});
