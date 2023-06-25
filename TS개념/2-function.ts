{
  // JS 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS ✨
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // ==================================================================

  // JS 💩
  function jsFetchNum(id) {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TS ✨
  // id는 보통 string인 경우가 많음.
  // 아래 함수는 리턴값으로 Promise를 받고 숫자형태로 => (resolve(100)) Promise 하기 때문에 <number> 를 써줌.
  function tsFetchNum(id: string): Promise<number> {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // ==================================================================

  // JS✨ => TS
  // 1. Optional parameter
  // ex) 두가지 인자가 아닌 어떨때는 하나만 출력하고 싶다~ 할때 Optional parameter를 사용함.
  // 전달해도 되고 안해도 되는 인자에 '?'를 붙여주면 된다.

  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined가 출력.
  }
  printName("sy", "Park"); // => o
  printName("sy");
  printName("sy", undefined);

  // ==================================================================

  // Default parameter
  // 타스에도 default 값을 지정해놓을 수 있다.
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();
  // default 값을 지정해주었기 때문에 optional parameter처럼 아무것도 전달 하지 않아도 디폴트값을 전달 해줌.

  // ==================================================================

  // Rest parameter
  // 인자로 받은 모든 숫자를 더하는 함수를 만들것이다.
  // 이럴 때 rest parameter를 사용하면 간편하게  배열형태로 받아 올 수 있다.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
