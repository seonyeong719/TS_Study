{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // 한샷당 커피콩이 얼마나 필요한지 그램수를 나타내는 상수
  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 5 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(3);
  console.log(coffee);
}
