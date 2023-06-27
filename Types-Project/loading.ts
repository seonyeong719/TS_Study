{
  /**
   * Print Loading State
   */

  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // 1번째 방법
  function printLogin(resource: ResourceLoadState) {
    if (resource.state === "loading") {
      console.log(" 👀 loading...");
    } else if (resource.state === "success") {
      console.log(`😃 ${resource.response.body}`);
    } else {
      console.log(`😱${resource.reason}`);
    }
  }

  //2방법
  // 함수명은 겹치니 2를 붙여줌
  function printLogin2(resource: ResourceLoadState) {
    switch (resource.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log(`😃 ${resource.response.body}`);
        break;
      case "fail":
        console.log(`😱${resource.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${resource}`);
    }
  }

  printLogin2({ state: "loading" }); // 👀 loading...
  printLogin2({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLogin2({ state: "fail", reason: "no network" }); // 😱 no network
}
