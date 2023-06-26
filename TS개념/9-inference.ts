/**
 * Type Inference (타입 추론)
 * 함수에 인자는 암묵적으로 any 타입을 갖고 있어서 타입을 명확히 입력하는게 좋다.
 *
 */
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello");
// => default 값으로 'hello'라는 string 타입의 문자열을 지정해줌으로써 타입이 자동적으로 string이 된다.

// ==================================================================

function add(x: number, y: number): number {
  return x + y;
  // x,y 는 숫자 타입이므로 return 값 또한 자동으로 숫자 타입이겠구나~ 라는 추론이 가능
}
const result = add(1, 2);
// => 추론을 통한 추론도 가능하다.
// 이처럼 add 함수는 return 값이 숫자 타입이므로 result 또한 숫자타입이구나 라고 추론이 가능
// 추후 프로젝트때 언제언제 타입을 안써도 되는지 컨벤션을 정확하게 정하고 하는걸 추천
