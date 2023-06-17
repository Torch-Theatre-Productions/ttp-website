export const theme = {
  background: "#000",
  foreground: "hsl(29, 72%, 95%)",
  padding: {
    top: 1.45,
    left: 1.0875,
  },
  get defaultPadding() {
    return `${this.padding.top}rem ${this.padding.left}rem ${this.padding.top}rem`;
  },
  get doublePadding() {
    return `${this.padding.top * 2}rem ${this.padding.left * 2}rem ${
      this.padding.top * 2
    }rem`;
  },
  get reversePadding() {
    return `${this.padding.top * -1}rem ${this.padding.left * -1}rem ${
      this.padding.top * -1
    }rem`;
  },
  get reverseDoublePadding() {
    return `${this.padding.top * -2}rem ${this.padding.left * -2}rem ${
      this.padding.top * -2
    }rem`;
  },
};
