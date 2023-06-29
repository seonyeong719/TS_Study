{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // interface를 상속할 때는 implements를 사용해야함.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0보다 많아야 한다!");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("기계 깨끗하게 청소 중..🧼");
    }

    private grindBeans(shots: number) {
      console.log(`커피콩 가는데 필요한 샷: ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피콩이 부족해!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("따뜻하게 데우는 중..🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`${shots} 샷.. ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 다른 클래스를 상속할 때는 extends를 사용해야함.
  class CafeLatteMachine extends CoffeeMachine {
    // 👇🏻자식 클래스에서 또 다른 데이터를 생성자에서 받아 올 수 있다면?
    // 자식 클래스에서 constructor를 따로 구현을 할 경우 => 꼭 super를 호출 해야한다. (부모의 생성자도 호출 해줘야 한다.)
    // 부모클래스에서 필요한 데이터도 받아오고 그 받아온 데이터를 super를 통해 전달해야 함
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("우유 스팀 하는중...🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // super 라는 키워드를 이용해서 부모 클래스에 있는 함수들을 호출하거나 접근할 수 있다.
      // 부모에서 사용했던 커피만드는 절차들(함수)을 다 이용하고 싶다면 super를 사용
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CafeLatteMachine(23, "ssss");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
/*
오버 라이팅
=> 자식 클래스에서 부모 클래스에 있는 함수를 덮어 씌울 수 있다. => 이게 오버 라이팅!!! 

==============================================

이처럼~~
상속을 잘 이용하면 공통적인 기능은 그대로 재사용을 하면서 자식 클래스에서만 자식 클래스에 특화된 기능을 할 수 있고 추가도 가능하다.

*/
