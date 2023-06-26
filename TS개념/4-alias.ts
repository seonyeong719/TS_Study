{
  /**
   * Type Aliases
   * 새로운 타입을 내가 정의할 수 있다는 말~
   * 문자열 뿐만 아니라 새로운 타입 숫자 등등 정의 할 수 있다.
   * 원시타입 뿐만 아니라 object 형태로도 정의 가능
   */
  type Text = string;
  const name: Text = "sy";
  const address: Text = "korea";
  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    // animal : 'dog' => 불가능
    name: "sy",
    age: 12,
  };

  // ==================================================================

  /**
   * String Literal Types
   * 타입을 문자열로도 지정할 수 있다.
   */
  type Name = "name";
  let syName: Name;
  //   syName = 'd' ==> 불가능
  syName = "name";

  type JSON = "json";
  const json: JSON = "json";
}
