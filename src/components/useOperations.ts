import { SetStateAction, useState } from "react";

export default function useOperations () {
    const [result, setResult] = useState<number | null>(null);

    const calculateValues = (operation: (arg0: any, arg1: any) => SetStateAction<number | null>, inputValues: [any, any]) => {
            const [a, b] = inputValues;
            setResult(operation(a, b));
    };

    const add = (a: number, b: number) => a + b;
    const subtract = (a: number, b: number) => a - b;
    const multiply = (a: number, b: number) => a * b;
    const divide = (a: number, b: number) => a / b;
    const pow = (a: number, b: number) =>{
        let original_val = 1;
        for (let i = 0; i < Math.abs(b); i++){
            original_val = a*original_val;
        }
        if (b < 0){
            original_val = 1/original_val
        }
        return original_val;
    }

    return { result, calculateValues, add, subtract, multiply, divide, pow };
};
