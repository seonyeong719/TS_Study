{
  /**
   * Intersection Types: &
   * Union 과 다르게 모든것을 다 합한것을 뜻함
   * 인터셉션 타입을 사용하면 다양한 타입들을 한번에 묶어서 선언할 수 있다.
   */
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  interWork({
    name: "sy",
    score: 1,
    employeeId: 1234,
    work: () => {},
  });
}
