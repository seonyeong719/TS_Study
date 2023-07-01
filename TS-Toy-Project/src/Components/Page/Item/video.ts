import { BaseComponent } from "../../components.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video_player"><iframe class="video_iframe"></iframe></div>
    <h3 class="video_title"></h3>
  </section>`);

    const iframe = this.element.querySelector(".video_iframe")! as HTMLIFrameElement;
    console.log(url);

    iframe.src = "https://www.youtube.com/embed/X5v7q7p5t1k"; // url => videoId => embed

    const titleElement = this.element.querySelector(".video_title")! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
