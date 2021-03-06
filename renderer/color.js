class NoahColor extends NoahObject {
    // 表示颜色的类
    constructor(r, g, b, a) {
        super()
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }
    // 常见的几个颜色
    static black() {
        return this.new(0, 0, 0, 255)
    }
    static white() {
        return this.new(255, 255, 255, 255)
    }
    static red() {
        return this.new(255, 0, 0, 255)
    }
    static blue() {
        return this.new(0, 0, 255, 255)
    }
    static green() {
        return this.new(0, 255, 0, 255)
    }
    static green2() {
        return this.new(0, 209, 178, 255)
    }
    interpolate(other, factor) {
        let c1 = this
        let c2 = other
        let r = c1.r + (c2.r - c1.r) * factor
        let g = c1.g + (c2.g - c1.g) * factor
        let b = c1.b + (c2.b - c1.b) * factor
        let a = c1.a + (c2.a - c1.a) * factor
        return NoahColor.new(r, g, b, a)
    }
    // 随机颜色
    static randomColor() {
        // random01 是 utils.js 中的函数
        return this.new(random01(), random01(), random01(), 255)
    }
}
