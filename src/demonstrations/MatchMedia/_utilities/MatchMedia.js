
// TODO: Explore a better solution to import these vars
// https://github.com/plentycode/sass-export
export const Breakpoints = [
  '660px'
];

// windows match media object must be built at runtime
export const MediaList = [{
  device: 'mobile',
  videoPlaceholderWidth: 627,
}, {
  device: 'tablet',
  videoPlaceholderWidth: 895,
}, {
  device: 'desktop',
  videoPlaceholderWidth: 735,
}, {
  device: 'widescreen',
  videoPlaceholderWidth: 780,
}];
/* eslint-disable */
export const LookupMediaList = (query) => {
  return find(MediaList, (item) => {
    if (item.device === query) {
      return item;
    }
  });
};

export const FilterMediaResult = (arr) => {
  return find(arr.map(item => LookupMediaList(item.device)),item => item.mqList.matches === true);
};
/* eslint-enable */
