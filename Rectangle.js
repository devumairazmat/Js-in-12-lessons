class Reactangle {
    constructor(left, right,height,width) {
        this.left = left;
        this.right = right;
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.width * this.height;
    }
}
const reactangle = new Reactangle (20,20,40,40);
console.log(reactangle);

export default Reactangle;