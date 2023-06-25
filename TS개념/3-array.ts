{
  // Array
  const fruits: string[] = ["🍎", "🍌"];

  const score: number[] = [1, 2, 3]; // 1번 . 숫자 배열을 이렇게 작성할 수 있고,
  const scores: Array<number> = [1, 2, 3]; // 2번. 이런식으로 Array라는 object를 써주고 <number> 로 작성도 가능하다.

  // 전달 된 인자를 함수 내부에서 변경하지 않도록 하기 위한 타입이 있는데, readonly를 붙여주면 된다.
  // fruits는 이제 절대 변경할 수 없고 데이터를 읽을수만 있다.
  // 이 또한 위 2번처럼 Array<string> 으로 작성할 수 있냐? => x 아직 이 방법은 허용되지 않음.
  // readonly를 사용할 땐 1번 방식만 허용이 된 상태라 코드를 일관성 있게 짜려면 1번 방법으로 코드를 짜는것을 추천.
  function printArray(fruits: string[]) {}

  // ==================================================================

  // Tuple -> interface, type alias, class 로 대체해서 사용하길 권장.

  // 튜플을 사용하면 서로 다른 타입의 데이터를 담을 수 있다.
  // 아래 처럼 사용가능 하지만 튜플 사용을 권장하지 않음!🚫
  // 이유는 1. 아래 예시를 보면 데이터에 접근할 때 인덱스 번호를 사용해  접근하는 방법은 가독성이 떨어짐.
  let student: [string, number];
  student = ["name", 1234];
  student[0]; // name
  student[1]; // 1234
  const [name, age] = student; // 이렇게 접근하면 좀 더 정확하게 접근 가능. useState와 비슷.(tuple을 잘 사용한 예시)
}
