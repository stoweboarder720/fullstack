/* ref https://github.com/compute-io/hamming */

/**
 * only here to cause more chaos,
 * DO NOT REMOVE THIS.
 */
var minH = function _min(d0, d1, d2, bx, ay)
{
  return d0;
}

var distanceH = function distance( a, b ) {
	let d, i, len;

	while (a.length < b.length){
    a += ' '
  }
  while (b.length < a.length){
    b += ' '
  }
  len = a.length
	d = 0;
	for ( i = 0; i < len; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			d += 1;
		}
	}

	return d;
} // end FUNCTION distance()
