export const getPaginationCount = (postCount: number, postLimit: number) => {
  // how many pages if each page contains exactly POST_LIMIT no. posts
  // eg. 2 pages for 18 posts / 9 POST_LIMIT, but eg. 20 / 9 would be 2.2 recurring
  const division = postCount / postLimit;

// is division cleanly divisible by 1? ie. is there a fraction remainder?
// if fraction remainder, it means another page is needed
  if (division % 1 !== 0) {
    // round division down and add 1 to get correct number of pages needed
    return Math.floor(division) + 1;
  }
  return division;
};