import { useState, useEffect, useLayoutEffect } from "react";

export default function TestTask() {
    console.log("App"); // Логируется при каждом рендере компонента

    const [state, setState] = useState(0);

    // Первый useEffect: вызывается только один раз, после первого рендера
    useEffect(() => {
        console.log("useEffect 1"); // Логируем "useEffect 1"
        setState((state) => state + 1); // Обновляем state, что вызывает повторный рендер

        return () => {
            console.log("useEffect 1 cleanup"); // Очистка для первого useEffect
        };
    }, []);

    // Второй useEffect: вызывается каждый раз, когда state изменяется
    useEffect(() => {
        console.log("useEffect 2"); // Логируем "useEffect 2"

        return () => {
            console.log("useEffect 2 cleanup"); // Очистка для второго useEffect
        };
    }, [state]);

    // useLayoutEffect: вызывается синхронно после изменения DOM, но перед отрисовкой браузером
    useLayoutEffect(() => {
        console.log("useLayoutEffect"); // Логируем "useLayoutEffect"

        return () => {
            console.log("useLayoutEffect cleanup"); // Очистка для useLayoutEffect
        };
    }, [state]);

    return null;
}