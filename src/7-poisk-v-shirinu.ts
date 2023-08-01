export const graph: Record<string, string[]> = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

let count = 0;
export function breadthSearch(
    graph: Record<string, string[]>,
    start: string,
    end: string,
) {
    let queue: string[] = [];
    queue.push(start);

    while (queue.length > 0) {
        count += 1;
        const current = queue.shift() as string;
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            console.log('breadthSearch max count to point = ', count);
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    console.log('breadthSearch max count to undefined point = ', count);
    return false;
}
