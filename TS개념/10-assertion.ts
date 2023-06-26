{
  /**
   * Type Assertion 💩 (타입을 강요할 때 사용)
   *
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc(); // 문자열을 return 하는 함수이므로 result엔 문자열이 담긴다
  // 하지만 result는 any 타입이라 문자열에서 사용하는 api는 사용불가 ❌

  // 그러나 '나는 이 타입이 문자열인걸 확신한다' 라고 할때 아래와 같이 Type Assertion 을 사용할 수 있음.
  // 하지만 만약 jsStrFunc 함수의 리턴값이 숫자로 바뀐다면? => 그래도 오류는 안뜨지만 콘솔창을 보면 undefined가 뜰것이다.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  // ==================================================================

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); => // 이렇게 쓰면 numbers는 숫자일수도 undefined일수도 있어서 위험하다. 그래서 이럴땐 아래와 같이 작성하면 된다.
  numbers!.push(2); // 😱 / 이렇게 '!' 를 붙여주면 절대x5 확실하다! 라는 의미로 이건 옵션이 아니라 절대적으로 값이 있다 라는 의미다.
}
