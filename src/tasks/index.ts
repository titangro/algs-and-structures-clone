import { fibonachi, iterationFibonachi } from './1-fibonachi';
import { polindrom, polindromBySplit } from './2-polindrom';
import { calcConsole } from './3-func';

export const tasks = () => {
    // fibonachi
    console.log('fibonachi -> ', fibonachi(-8));
    console.log('iterationFibonachi -> ', iterationFibonachi(-8));

    // polindrom
    console.log('polindrom -> ', polindrom('asdsa'));
    console.log('polindromBySplit -> ', polindromBySplit('asdsa'));

    // carring
    calcConsole();
};
