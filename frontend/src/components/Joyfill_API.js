const userAccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjY2ZjVlOGUxZmQ5YzBjMmQyN2Q3ZDljZiJ9.TwINkonQ3jwS_r3pzICAUAt0ZOzxyJlmkv--n5-ZquQ";
const apiBaseUrl = "https://api-joy.joyfill.io";

export const retrieveTemplate = async (identifier) => {

  //See API Doc Here: https://docs.joyfill.io/reference/retrieve-a-template
  const response = await fetch(`${apiBaseUrl}/v1/templates/${identifier}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${userAccessToken}`,
      'Content-Type': 'application/json'
    },
  });

  const data = await response.json();
  return data;
}