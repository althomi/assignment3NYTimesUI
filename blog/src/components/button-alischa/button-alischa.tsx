import {Component, Prop, h} from "@stencil/core";
@Component({
  tag: 'button-alischa',
  styleUrl: 'button-alischa.css',
  shadow: true
})

export class ButtonAlischa {
  @Prop() event: UIEvent;
  @Prop() link: string;

  handleClick(event: UIEvent) {
    this.event = event;
    console.log ("login click successfull");
  }


  render() {
    return (
      <button onClick={ (event: UIEvent) => this.handleClick(event)}><a class="link" href={this.link} target="_blank">Login</a></button>
    )
  }
}
