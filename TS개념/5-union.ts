{
  /**
   * Union Types: OR
   * 타입스크립트에서 굉장히 활용도가 높은 타입이다!
   * 발생할 수 있는 모든 케이스 중에 한가지만 선택 가능하다.
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // 예제 ~ function: login -> success, fail
  // login 은 네트워크 통신을 하므로 비동기인 보통 Promise를 써줌
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`🎉 ${state.reason}`);
    }
  }
  // => 딱히 좋은 방법은 아니다.
}
