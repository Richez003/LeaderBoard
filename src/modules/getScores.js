export default async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Richez003/scores';
  return (await fetch(url)).json();
};