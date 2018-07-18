function loadVideo(
  state = {
    videoUrl:
      "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
  },
  action
) {
  switch (action.type) {
    case "LOAD_HOME_PAGE_VIDEO":
      return state.loadVideo;

    default:
      return state;
  }
}

export default loadVideo;
