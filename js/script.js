var handler = function () {
    this.data = [
        { viewers: "10K", price: 8 },
        { viewers: "50K", price: 12 },
        { viewers: "100K", price: 16 },
        { viewers: "500K", price: 24 },
        { viewers: "1M", price: 36 },
    ];
    this.discount = 0;
    this.range = document.querySelector("input[type='range']");
    this.slider = document.querySelector(".slider");
    this.viewers = document.querySelector("#followers");
    this.price = document.querySelector("#price");
    this.changeData = () => {
        let { viewers, price } = this.data[Number(this.range.value)];
        this.viewers.innerHTML = viewers;
        price *= 1 - this.discount;
        this.price.innerHTML = price.toFixed(2);
    };
    this.sliderClick = () => {
        this.slider.classList.toggle("active");
        if (this.discount) this.discount = 0;
        else this.discount = 0.25; //25%
        this.changeData();
    };
    this.rangeChange = () => {
        this.changeData();
        let min = this.range.getAttribute("min");
        let max = this.range.getAttribute("max");
        let value = this.range.value;
        this.range.style["background-size"] = `${
            (100 * value) / (min + max)
        }% 100%`;
    };
    this.slider.addEventListener("click", this.sliderClick);
    this.range.addEventListener("change", this.rangeChange);
    return this;
}.call({});
