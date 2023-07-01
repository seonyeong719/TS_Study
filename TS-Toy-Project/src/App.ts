import { ImageComponent } from "./Components/Page/Item/image.js";
import { PageComponent } from "./Components/Page/page.js";
// 따로 스크립트를 사용하고 있지 않기 때문에 import할 때 확장명도 함계 작성해줘야 함. ex)page.js

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
    image.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLAnchorElement);
