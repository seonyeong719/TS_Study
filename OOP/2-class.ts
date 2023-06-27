{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // class 안에는 const,let function 함수들을 작성하지 않는다.
  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // static을 붙이면 class level =>class 안에서 함께 공유되어도 된다면 static을 붙인다.
    coffeeBeans: number = 0; // 안붙이면 instance (object) level

    // constructor라는 함수는 클래스를 가지고 오브젝트를 만들때 항상 호출되는 함수.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // class 안에 있는 멤버 변수에 접근하려면 항상 앞에 this. 을 붙여줘야 한다.
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(16);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
  // => 17번째 줄의 함수를 static으로 만들어 주면 이렇게 작성해도 된다.
}
