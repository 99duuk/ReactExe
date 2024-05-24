import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }

    // class Counter extends Component { // Counter라는 이름의 클래스 컴포넌트를 정의합니다. 이 클래스는 React의 Component를 상속받습니다.
    //     constructor(props) { // 컴포넌트의 생성자 함수입니다. props를 인수로 받습니다.
    //         super(props); // 부모 클래스인 Component의 생성자를 호출하여, props를 상속받습니다.
    //         this.state = { // 컴포넌트의 초기 상태를 정의합니다.
    //             number: 0, // number 상태 변수를 0으로 초기화합니다.
    //             fixedNumber: 0 // fixedNumber 상태 변수를 0으로 초기화합니다.
    //         };
    //     }
    

    render(){
        const { number, fixedNumber } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                onClick={() => {
                    this.setState(
                    {
                        number: number + 1
                    },
                    () => {
                        console.log('방금 setState가 호출되었습니다.');
                        console.log(this.state);
                    }
                    );
                }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;