{
  /**
   * Enum
   * 사용을 권장하지는 않음.
   * 단점은? => enum이라고 지정된 변수에 다른 값이 들어가도 할당이 된다는것이 문제!!! enum을 사용하면 타입이 정확히 보장되지 않는게 문제다.
   */
  // JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TS
  // enum에서는 다 대문자가 아닌 앞에만 대문자로 적어야 함
  // 값을 할당해주지 않으면 enum에서는 알아서 0부터 지정해 줌
  // 만약 난 Monday를 1부터 해주고 싶다~ 라고 한다면 'Monday =1' 이라고 작성해주면 됨.
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Thursday);
  const day = Days.Saturday;
  console.log(day);

  // => Change Union Type
  // 대부분의 enum 타입은 Union 타입으로 대체 가능하다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Wednesday";
}
