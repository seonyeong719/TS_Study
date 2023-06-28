{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public = 기본적으로 명시 되어 있어서 굳이 안해도 자동으로 명시됨. 공개적으로 설정이 되어있음
  // private => 어떤 누구라도 외부에서 볼 수 없고 접근이 불가능한 상태로 만든다.
  // protected => 상속을 할 때 외부에서는 접근 불가하지만, 클래스를 상속한 자식 클래스에서만 접근이 가능하도록 설정 가능.

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // BEANS...는 외부에서 접근할 필요가 없기 때문에 private을 붙임.
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0보다 많아야 한다!");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
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

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
  // 제한사항이 없기 때문에 외부에서 나의 오브젝트 상태를 유효하지않은 상태로 만들수 있는 위험한 상황.

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    // get을 쓰면 fullName에 접근할 때 마다 새로운 데이터를 만들고 계산할 수 있다.

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      // 전달된 함수 안에서 조건문으로 유효성 검사도 가능하다.
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName); // Steve Jobs => 변경되지 않음. 이럴 경우에 get이 굉장히 유용하게 쓰일 수 있다.
  //get 키워드를 쓰면 함수형태가 되지만(함수는 아님) 접근할 때는 함수가 아니라 멤버 변수에 접근하는 것처럼 작성해야 한다.
  // 이처럼 set, get은 일반 멤버변수처럼 사용이 가능하지만, 어떠한 계산을 해야 할때 조금 더 유용하게 쓸 수 잇다.
}
