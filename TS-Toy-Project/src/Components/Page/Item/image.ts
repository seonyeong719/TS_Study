export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
    <div class="image_holder"><img class="image_thumbnail" /></div>
    <p class="image_title">${title}</p>
  </section>`; // 사용자에게 전달받은 데이터를 innerHTML 에 설정하는것은 좋지 않음!
    // 필요한 부분만 설정해주는것이 좋다.

    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(".image_thumbnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".image_title")! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
