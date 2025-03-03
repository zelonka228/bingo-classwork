import { test, expect, beforeEach, afterEach } from "vitest";
import './main';

test('Перевірка на текст "Творець BINGO"', ()=> {
    expect(document.body).toHaveTextContent("Творець BINGO")
})

test('Проверка кнопки бинго когда сделал пять в ряд', () => {
expect(document.body).toHaveTextContent("BINGO")
})

