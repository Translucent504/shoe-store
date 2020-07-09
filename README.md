# Mockup

![mockup](mockup.png)

- ## Inspirations

  - [Nike](https://www.nike.com/launch)
  - [Adidas](https://www.adidas.com/us/men-shoes)
  - [Reebok](https://www.reebok.com/us/men-shoes)
  - [Puma](https://us.puma.com/en/us/men/shoes)

- ## Our version

  - Main flat display like Nike (**Infinite scrolling Grid, add load more button? or keep it autoload? The load more button is for cases where we care about the user being able to access the footer, since we have no footer we dont care.**).
        ![flat nike display](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Feru504%2Fn0OQ4wjo5j.png?alt=media&token=143e6f0b-dc4d-4e3e-b52f-51856ab9f1f7)
  - On hover popout card like adidas and rebok
        ![popout gif](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Feru504%2F7DUyr_xefV.gif?alt=media&token=8cda7027-a29f-4583-a507-a1608842c855)
  - OnClick modal like puma quickview.
        ![modal display like puma](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Feru504%2F-rlUH5VM4v.png?alt=media&token=15d1ee24-b291-4c03-945d-ee8a7e08bc0b)
  - Cart button sidebar slide in and Add to cart modal show like puma:
            ![gif showing sidebar opening on cart](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Feru504%2FHjEAPYGZ2x.gif?alt=media&token=c58e0172-d0fb-4b4a-a9c8-b4ffb29dd0ef)

- ## Software decisions

  - maybe serve images in next-gen formats like WebP, JPEG2000, JPEGXR??
  - Which UI Libraries can we use?
    - [Ant-Design](https://ant.design/components/overview/)
    - [Material UI](https://material-ui.com/)
    - fragmented UI components that fill a single purpose?
      - [Main List](https://github.com/brillout/awesome-react-components)
      - [Modal: react-skylight](http://marcio.github.io/react-skylight/)
      - [Infinite scroll grid](https://github.com/naver/egjs-infinitegrid/tree/master/packages/react-infinitegrid)
      - [react-toastify notification](https://fkhadra.github.io/react-toastify/introduction/)
      - [react-burger-menu sidebar](https://negomi.github.io/react-burger-menu/)
      - [react-intense superzoom](https://react-intense.bryce.io/)
      - [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid) can be used for responsive layouts with the xs=12, md=6 lg=4
  - We should add the On click modal thing on the 2nd component that only displays when we are on the hover state, this is coz the mobile ppl cant hover and they have to click once to go into the hover state and then click again to get the modal? lol
  - random snippets
    - Hover component change:
      - [SO](https://stackoverflow.com/questions/44566340/show-a-component-on-hover-in-reactjs) [sandbox example](https://codesandbox.io/s/XopkqJ5oV?file=/index.js)

```javascript
import React, { Component } from "react";
import { render } from "react-dom";

class HoverExample extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div>
        {!this.state.isHovering && (
          <div
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            Hover Me
          </div>
        )}
        {this.state.isHovering && (
          <div
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            Hovering right meow!
          </div>
        )}
      </div>
    );
  }
}

render(<HoverExample />, document.getElementById("root"));
```

- ## Css stuff
  
  - Can overlay text on image by using absolute positioning and then spacing it from the margins by fixed amounts.

  - Selecting all img elements with "poop" class is done using `img.poop {}`. Selecting all img elements that are inside containers / are descendants of containers with class "poop" is done by `.poop img {}`
  
  - Object placement along the main flexbox direction is done by first setting everything with `justify-contents:flex-end` etc and then using `margin: auto` and its variants like `margin-left: auto` on the children for specific placement. Object placement along the cross axis inside flexbox is done by using `align-self: auto`. There is an [Amazing demonstration of flexbox alignment on SO](https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties/33856609#33856609)

  - The hover whitening effect on images is added by simply changing the `opacity: 0.6` or something and then making it look smooth by adding a `transition: 0.5s ease`
