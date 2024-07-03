export const explorePopularRepos = async (req, res) => {
  const { language } = req.params;
  console.log(`Received request for language: ${language}`);

  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${encodeURIComponent(
        language
      )}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    console.log(`GitHub API response status: ${response.status}`); // Log the response status

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    res.status(200).json({ repos: data.items || [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
