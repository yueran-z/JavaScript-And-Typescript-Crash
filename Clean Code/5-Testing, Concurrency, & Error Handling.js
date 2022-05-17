/* TESTING */
// Single concept per test

// BAD
import assert from 'assert';

describe('MakeMomentJSGreatAgain', () => {
    it('handles date boundaries', () => {
        let date;

        date = new MakeMomentJSGreatAgain('3/1/2017');
        date.addDays(30);
        assert.equal('3/31/2017', date);

        date = new MakeMomentJSGreatAgain('2/1/2016');
        date.addDays(28);
        assert.equal('02/29/2016', date);

        date = new MakeMomentJSGreatAgain('2/1/2017');
        date.addDays(28);
        assert.equal('03/01/2017', date);
    });
});

// GOOD
import assert from 'assert';

describe('MakeMomentJSGreatAgain', () => {
    it('handles 30-day months', () => {
        const date = new MakeMomentJSGreatAgain('3/1/2017');
        date.addDays(30);
        assert.equal('3/31/2017', date);
    });

    it('handles leap year', () => {
        const date = new MakeMomentJSGreatAgain('2/1/2016');
        date.addDays(28);
        assert.equal('02/29/2016', date);
    });

    it('handles non-leap year', () => {
        const date = new MakeMomentJSGreatAgain('2/1/2017');
        date.addDays(28);
        assert.equal('03/01/2017', date);
    });
});

/* CONCURRENCY */
// Use ES6 Promises, not callbacks

// BAD
import {
    get
} from 'request';
import {
    writeFile
} from 'fs';

get('https://en.wikipedia.org/wiki/FreeCodeCamp', (requestErr, response) => {
    if (requestErr) {
        console.error(requestErr);
    } else {
        writeFile('article.html', response.body, (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
            } else {
                console.log('File written');
            }
        });
    }
});

// GOOD
import {
    get
} from 'request';
import {
    writeFile
} from 'fs';

get('https://en.wikipedia.org/wiki/FreeCodeCamp')
    .then((response) => {
        return writeFile('article.html', response);
    })
    .then(() => {
        console.log('File written');
    })
    .catch((err) => {
        console.error(err);
    });

// ES8 Async/Await are even cleaner than Promises

// BAD
import {
    get
} from 'request-promise';
import {
    writeFile
} from 'fs-promise';

get('https://en.wikipedia.org/wiki/FreeCodeCamp')
    .then((response) => {
        return writeFile('article.html', response);
    })
    .then(() => {
        console.log('File written');
    })
    .catch((err) => {
        console.error(err);
    });

// GOOD
import {
    get
} from 'request-promise';
import {
    writeFile
} from 'fs-promise';

async function getCleanCodeArticle() {
    try {
        const response = await get('https://en.wikipedia.org/wiki/FreeCodeCamp');
        await writeFile('article.html', response);
        console.log('File written');
    } catch (err) {
        console.error(err);
    }
}

/* ERROR HANDLING */
// Don't ignore caught errors

// BAD
try {
    functionThatMightThrow();
} catch (error) {
    console.log(error);
}

// GOOD
try {
    functionThatMightThrow();
} catch (error) {
    // One option (more noisy than console.log):
    console.error(error);
    // Another option:
    notifyUserOfError(error);
    // Another option:
    reportErrorToService(error);
    // OR do all three!
}