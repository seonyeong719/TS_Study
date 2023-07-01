export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * BaseComponent는 어떤것을 하는가?
 * ->  HTML element 를 만드는 것을 Encapsulate (캡슐화)를 한다.
 */

// 여기서 'T' 는 모든 타입이 가능하기 때문에 모두 다 T가 되는것은 아니다.
// 반드시 'HTMLElement' 이거나 element를 상속하는 서브클래스만 가능하다.
export class BaseComponent<T extends HTMLElement> implements Component {
  // element는 외부에서 볼 수 없고 이것을 상속하는 자식 클래스에서만 접근이 가능하도록 만들었다.
  // 한번 만들어진 element는 읽기만 가능하다.
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
