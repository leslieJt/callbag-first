const first = () => source => (start, slink) => {
  if (start !== 0) return;
  let talkback;
  let firsted = false;
  source(0, (t, d) => {
    if (t === 0) {
      talkback = d;
      slink(t, d);
    } else if (t === 1) {
      if (firsted) return;
      firsted = true;
      talkback(2);
      slink(t, d);
      slink(2);
    } else {
      slink(t, d);
    }
  });
};

module.exports = first;
