/// Дан словарь из городов и дат выступлений рок-группы

/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Казань", "Питер", "Калининград"]

interface IConcerts {
    [city: string]: Date;
}

export const concerts: IConcerts = {
    Москва: new Date('2023-04-01'),
    Казань: new Date('2024-07-02'),
    Владивосток: new Date('2023-04-21'),
    Калининград: new Date('2024-07-15'),
    Омск: new Date('2023-04-18'),
    Питер: new Date('2024-07-10'),
};

export function cityDateToArray(concerts: IConcerts): string[] {
    const result: string[] = [];
    const currentDate = new Date();

    Object.keys(concerts).forEach((city) => {
        if (concerts[city] > currentDate) {
            result.push(city);
        }
    });

    return result.sort(
        (aCity, bCity) => concerts[aCity].getTime() - concerts[bCity].getTime(),
    );
}
