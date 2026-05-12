// 카운터 컴포넌트
class Counter {
    constructor(options = {}) {
        this.count = options.initialValue || 0;
        this.min = options.min || null;
        this.max = options.max || null;
        this.step = options.step || 1;
        this.onChange = options.onChange || null;
    }

    // 증가
    increment() {
        if (this.max === null || this.count < this.max) {
            this.count += this.step;
            this.notifyChange();
        }
    }

    // 감소
    decrement() {
        if (this.min === null || this.count > this.min) {
            this.count -= this.step;
            this.notifyChange();
        }
    }

    // 리셋
    reset(initialValue = 0) {
        this.count = initialValue;
        this.notifyChange();
    }

    // 값 설정
    setValue(value) {
        if ((this.min === null || value >= this.min) &&
            (this.max === null || value <= this.max)) {
            this.count = value;
            this.notifyChange();
        }
    }

    // 현재 값 반환
    getValue() {
        return this.count;
    }

    // 변경 알림
    notifyChange() {
        if (this.onChange) {
            this.onChange(this.count);
        }
    }
}

// 사용 예시
/*
const myCounter = new Counter({
    initialValue: 0,
    min: 0,
    max: 10,
    step: 1,
    onChange: (value) => {
        console.log('카운트:', value);
    }
});

myCounter.increment();  // 1
myCounter.increment();  // 2
myCounter.decrement();  // 1
myCounter.reset();      // 0
*/
