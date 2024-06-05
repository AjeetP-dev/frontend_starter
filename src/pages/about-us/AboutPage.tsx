import { useSelector } from 'react-redux';

const AboutPage = () => {
  const stories = useSelector((state: unknown) => (state as any)?.user);
  console.log('stories inside about', stories);
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Page of our application.</p>
      <p>Feel free to add more details about your project or organization here.</p>
    </div>
  );
};

export default AboutPage;
