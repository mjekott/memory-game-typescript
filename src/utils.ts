interface Cardable {
  name: string;
  value: string;
}

export function match<T extends Cardable>(first: T, second: T): boolean {
  if (!first || !second) {
    return false;
  }
  if (first.name === second.name && first.value === second.value) {
    return true;
  }
  return false;
}

export function shuffleAny<T>(arr: T[]): void {
  const deck = arr;
  deck.forEach((value) => {
    const index = deck.indexOf(value);
    const newIndex = Math.floor(Math.random() * deck.length);
    [deck[index], deck[newIndex]] = [deck[newIndex], deck[index]];
  });
}
