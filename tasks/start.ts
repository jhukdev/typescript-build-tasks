import run from './run';
import clean from './clean';
import build from './script/build/build';

/* -----------------------------------
 *
 * Start
 *
 * -------------------------------- */

async function start() {
   await run(clean);
   await run(build);
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export default start;
