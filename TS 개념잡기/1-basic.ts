{
  // number
  const num: number = -1;

  // =========================================================

  // string
  const str: string = "hi";

  // =========================================================

  // boolean
  const boal: boolean = false;

  // =========================================================

  // undefined
  //=> 값이 있는지 없는지 결정!되지 않은 상태.
  // 변수선언할때 보통 undefined 타입만 단독으로 할당해주진 않는다. 이유는 undefined만 할당 가능하기 때문.
  // 💡보통은 null 보단 undefined을 주로 쓰는데, 값이 아직 할당 되지 않은 상태를 나타내려면 undefined를 사용.

  let name: undefined; // => 이렇게 작성하면 ❌

  let age: number | undefined; // 👌🏻
  age = undefined;
  age = 1;

  // =========================================================

  // null
  //=> 텅 비있다.
  // null 또한 단독으로 사용하지 않음.
  // 💡값이 있거나 없거나 둘 중 하나다~ 라고 사용하고 싶으면 null을 사용.

  let person: null; // => ❌
  let person2: string | null;

  // =========================================================

  // unknown => 💩
  // 어떤 종류의 값이 담길지 알 수 없는 타입이 돼버림. 그래서 문자열, 숫자 등등 어떠한 타입의 값들을 담을 수 있음.(어떤 상태인지 모름)
  // 가능하면 쓰지 않는것이 좋음.

  let notSure: unknown = 0;
  notSure = "she";
  notSure = true;

  // =========================================================

  // any => 💩
  // any 또한 가능하면 쓰지 않는것이 좋음
  let anything: any = 0;
  anything = "hello";

  // =========================================================

  // void => 💩
  // 아무것도 리턴하지 않겠다~ 할 때 void를 사용. (텅텅 빈)
  // void는 생략 가능.

  function print(): void {
    // "hi" 라는 단어만 출력하고 아무 값을 리턴 하지 않겠다.
    console.log("hi");
    return;
  }
  let unusable: void = undefined; // => 이렇게 변수에는 할당❌. void는 undefined밖에 할당이 안되기 때문. => 💩

  // =========================================================

  // never
  // 어플리케이션에서 어떠한 에러를 던질 때. 핸들링 할 수 없는 에러가 발생했을 때 사용.
  // 에러가 발생했을 때 이 함수는 절대 리턴하는 값이 없으므로. never를 명시 해주면 해당 함수를 호출하면 "난 리턴해줄 계획이 없다~" 라는 의미.

  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // -> 이렇게 사용❌. => 💩

  // =========================================================

  // object => 💩
  // 이 함수에는 어떠한 obj도 전달 가능!
  // 원시 타입을 제외한 모든 obj 타입은 전달가능 , 배열도 가능!!!
  // 하지만!!!!!!!! 이처럼 광범위한 타입, 모든걸 담을 수 있는 타입은 조심해야함.

  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "sy" });
  acceptSomeObject({ animal: "cat" });
  // ~ 이처럼 어떠한 객체도 전달 가능
}
