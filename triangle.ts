export class Triangle {
    side1: number;
    side2: number;
    side3: number;

    constructor(side1: number, side2: number, side3: number) {

        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    private get confirmTriangle() {
        return (this.conformToSideLaw &&
            this.side1 > 0 && this.side2 > 0 && this.side3 > 0)
    }

    get conformToSideLaw() {
        return (this.side1 + this.side2 >= this.side3
            && this.side3 + this.side2 >= this.side1
            && this.side1 + this.side3 >= this.side2)
    }

    get isEquilateral() {
        return this.confirmTriangle && this.side1 === this.side2 && this.side1 === this.side3
    }

    get isIsosceles() {

        return (
            this.confirmTriangle &&
            (this.side1 === this.side2 ||
                this.side2 === this.side3 ||
                this.side3 === this.side1)
        )
        /*
        if (this.side1 === this.side2 && this.side1 > this.side3) {
            return this.confirmTriangle
        } else if (this.side2 === this.side3 && this.side2 > this.side1) {
            return this.confirmTriangle
        } else if (this.side1 === this.side3 && this.side1 > this.side2) {
            return this.confirmTriangle
        } else if (this.side1 === this.side2 && this.side1 === this.side3) {
            return this.confirmTriangle
        }
        */
    }

    get isScalene() {
        return (this.confirmTriangle &&
            !this.isEquilateral &&
            !this.isIsosceles)
    }


}

