
import vl from 'vega-lite-api';
export   const viz = vl
//setting the parameters of the visualization
.markCircle({ size: 800, opacity: 0.5 })
.encode(
  vl.x().fieldN('Sport').scale({ zero: false }),
  vl.y().fieldQ('Earnings').scale({ zero: false }),
  vl.color().fieldQ('Earnings'),
);
