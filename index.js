var JsBarcode = require('jsbarcode');

var VueBarcode = {
  template: '' +
  '<div>' +
    '<svg class="vue-barcode-element" v-show="valid"></svg>' +
    '<div v-show="!valid">' +
      '<slot></slot>' +
    '</div>' +
  '</div>',
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    text: [String, Number],
    fontOptions : [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
  },
  mounted: function(){
    this.$watch('$props', render, { deep: true, immediate: true });
    render.call(this);
  },
  data: function(){
    return {valid: true};
  }
};

function render(){
  JsBarcode(this.$el.querySelector('.vue-barcode-element'), this.value, {
    format: this.format,
    height: this.height,
    width: this.width,
    text: this.text,
    fontOptions: this.fontOptions,
    font: this.font,
    textAlign: this.textAlign,
    textPosition: this.textPosition,
    textMargin: __guard(this.textMargin),
    fontSize: this.fontSize,
    background: this.background,
    lineColor: this.lineColor,
    margin: __guard(this.margin),
    marginTop: __guard(this.marginTop),
    marginBottom: __guard(this.marginBottom),
    marginLeft: __guard(this.marginLeft),
    marginRight: __guard(this.marginRight),
    valid: function (valid) { this.valid = valid; }
  });
}

function __guard(value) {
  if (typeof value === 'undefined')
    return null;
  else
    return value;
}

module.exports = VueBarcode;