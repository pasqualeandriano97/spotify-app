const fillMusicSection = async (artistName) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName
    );
    if (response.ok) {
      let { data } = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.log("error", err);
  }
};

export default fillMusicSection;
